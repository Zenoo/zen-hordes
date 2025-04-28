#!/bin/bash

# Generate TypeScript API types from Swagger JSON
npx swagger-typescript-api generate -n ApiTypes.ts -o scripts/ -p https://gitlab.com/eternaltwin/myhordes/myhordes/-/raw/master/assets/js/swagger.json -r

# Patch the generated file to allow query auth
sed -i 's/FullRequestParams): Promise<HttpResponse<T, E>> => {/FullRequestParams): Promise<HttpResponse<T, E>> => {\n    \/\/ Hack to auth using query here\n    query = {\n      ...query,\n      ...this.securityData,\n    };\n/g' scripts/ApiTypes.ts
