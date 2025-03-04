# @internal/plugin-scaffolder-backend-module-rundeck

The Rundeck module for [@backstage/plugin-scaffolder-backend](https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend). This module adds a Rundeck action that can be used in your scaffolder templates.

## Installation

### From Git

1. Add the module to your backend package:

```bash
cd packages/backend
yarn add https://github.com/justynroberts/rundeck-backstage.git#main
```

2. Configure the module in your `packages/backend/src/index.ts`:

```typescript
// In packages/backend/src/index.ts
backend.add(import('@internal/plugin-scaffolder-backend-module-rundeck'));
```

### Configuration

Add your Rundeck configuration to your `app-config.yaml`:

```yaml
rundeck:
  url: ${RUNDECK_API_URL}
  apiToken: ${RUNDECK_API_TOKEN}

```
Then Set the environment variables as usual.

To Avoid CORS issues, its also recommended to use the proxy setting sin the `app-config.yaml`:

```yaml
backend:
  endpoints:
    '/proxy/rundeck':
      target: ${RUNDECK_API_URL}
      headers:
        X-Rundeck-Auth-Token: ${RUNDECK_API_TOKEN}
      changeOrigin: true
      # If your Rundeck instance uses a self-signed certificate
      secure: false
```



## Usage

The module provides a `rundeck:execute` action that can be used in your scaffolder templates. Example:

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: rundeck-example
  title: Rundeck Example
spec:
  steps:
    - id: rundeck
      name: Execute Rundeck Job
      action: rundeck:execute
      input:
        jobId: your-job-id
        # Optional parameters
        args:
          key1: value1
          key2: value2
```
A more featured example is available as `rundeck-sample-template.yaml`

## Local Development

To develop the module locally:

1. Clone the repository
2. Install dependencies with `yarn install`
3. Build with `yarn build`
4. Run tests with `yarn test`

## License

Apache-2.0
