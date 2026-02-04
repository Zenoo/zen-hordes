type BatchRequest<TResult> = {
  id: number;
  resolve: (value: TResult | null) => void;
  reject: (error: Error) => void;
};

type BatchFetchOptions = {
  batchDelay?: number;
};

export const createBatchFetcher = <TResponse, TResult>(
  fetchFn: (ids: number[]) => Promise<TResponse>,
  extractResult: (response: TResponse, id: number) => TResult | null,
  options: BatchFetchOptions = {}
) => {
  const batchDelay = options.batchDelay ?? 200;
  let batchTimeout: number | null = null;
  const pendingRequests: BatchRequest<TResult>[] = [];

  const executeBatch = async (): Promise<void> => {
    const requests = [...pendingRequests];
    pendingRequests.length = 0;
    batchTimeout = null;

    if (requests.length === 0) return;

    try {
      const ids = requests.map((req) => req.id);
      const response = await fetchFn(ids);

      if (
        typeof response === "object" &&
        response !== null &&
        "success" in response &&
        !response.success
      ) {
        const error = new Error(
          ("error" in response && typeof response.error === "string"
            ? response.error
            : undefined) ?? "Batch fetch failed"
        );
        requests.forEach((req) => req.reject(error));
        return;
      }

      requests.forEach((req) => {
        const result = extractResult(response, req.id);
        req.resolve(result);
      });
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Unknown error");
      requests.forEach((req) => req.reject(err));
    }
  };

  const fetch = (id: number): Promise<TResult | null> => {
    return new Promise<TResult | null>((resolve, reject) => {
      pendingRequests.push({ id, resolve, reject });

      if (batchTimeout !== null) {
        clearTimeout(batchTimeout);
      }

      batchTimeout = window.setTimeout(executeBatch, batchDelay);
    });
  };

  return { fetch };
};
