export enum Severity {
  INFO = "notice",
  WARN = "warn",
  ERROR = "error",
}

export const notify = (message: string, severity: Severity = Severity.INFO) => {
  let container = document.querySelector("#notifications");

  if (!container) {
    container = document.createElement("div");
    container.id = "notifications";
    document.body.appendChild(container);
  }

  const notification = document.createElement("div");
  notification.classList.add("show", severity);
  notification.textContent = message;

  container.appendChild(notification);

  // Remove notification after 5 seconds
  const timeout = setTimeout(() => {
    notification.classList.remove("show");
    notification.classList.add("disappear");

    setTimeout(() => {
      notification.remove();
    }, 2000);
  }, 5000);

  // Remove notification on click
  notification.addEventListener("click", () => {
    clearTimeout(timeout);
    notification.classList.remove("show");
    notification.classList.add("disappear");

    setTimeout(() => {
      notification.remove();
    }, 2000);
  });
};
