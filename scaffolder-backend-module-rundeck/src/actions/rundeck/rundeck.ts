import { createBackendModule } from '@backstage/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import { coreServices } from '@backstage/backend-plugin-api';

// Import the createRundeckExecuteAction function directly, not from index
import { createRundeckExecuteAction } from '@internal/plugin-scaffolder-backend-module-rundeck/src/actions/rundeck/rundeck';

export const rundeckModule = createBackendModule({
  moduleId: 'rundeck-actions',
  pluginId: 'scaffolder',
  register(env) {
    env.registerInit({
      deps: {
        scaffolderActions: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig,
      },
      async init({ scaffolderActions, config }) {
        scaffolderActions.addActions(createRundeckExecuteAction(config));
      },
    });
  },
});
