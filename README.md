# @internal/plugin-scaffolder-backend-module-rundeck

The Rundeck module for [@backstage/plugin-scaffolder-backend](https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend). This module adds a Rundeck action that can be used in your scaffolder templates.

## Installation

### From Git

1. Add the module to your backend package:

```bash
cd packages/backend
yarn add https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git#main
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
  baseUrl: ${RUNDECK_BASE_URL}
  # Optional: authentication token
  authToken: ${RUNDECK_AUTH_TOKEN}
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

## Local Development

To develop the module locally:

1. Clone the repository
2. Install dependencies with `yarn install`
3. Build with `yarn build`
4. Run tests with `yarn test`

## License

Apache-2.0
