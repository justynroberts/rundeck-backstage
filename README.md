# @internal/plugin-scaffolder-backend-module-rundeck

Integrate Rundeck seamlessly into your [Backstage Scaffolder](https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend) with this module. It provides a `rundeck:execute` action to trigger Rundeck jobs directly from your scaffolder templates.

## Installation

### Via Git

1. **Add the module to your backend package:**

   ```bash
   cd packages/backend
   yarn add https://github.com/justynroberts/rundeck-backstage.git#main
   ```

2. **Register the module in `packages/backend/src/index.ts`:**

   ```typescript
   // packages/backend/src/index.ts
   backend.add(import('@internal/plugin-scaffolder-backend-module-rundeck'));
   ```

## Configuration

### Rundeck Settings

Configure your Rundeck connection in `app-config.yaml`:

```yaml
rundeck:
  url: ${RUNDECK_API_URL}
  apiToken: ${RUNDECK_API_TOKEN}
```

Set the corresponding environment variables as needed.

### Proxy Setup

To bypass CORS issues, add a proxy endpoint in `app-config.yaml`:

```yaml
backend:
  endpoints:
    '/proxy/rundeck':
      target: ${RUNDECK_API_URL}
      headers:
        X-Rundeck-Auth-Token: ${RUNDECK_API_TOKEN}
      changeOrigin: true
      # For self-signed certificates, disable SSL verification
      secure: false
```

## Usage

Use the `rundeck:execute` action in your scaffolder template. For example:

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

For a more detailed example, see `rundeck-sample-template.yaml`.
`your-job-id` is the UUID for the job execution
Options are passed across irrespective of being defined at the job end

## Local Development

To develop or customize the module locally:

1. Clone the repository.
2. Install dependencies with `yarn install`.
3. Build the project using `yarn build`.
4. Run tests with `yarn test`.

## License

Apache-2.0
