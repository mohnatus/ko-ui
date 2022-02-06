import { components } from "knockout";

export function registerComponent(componentName, componentConfig) {
  if (components.isRegistered(componentName)) return;

  components.register(componentName, {
    viewModel: {
      createViewModel: componentConfig.model
    },
    template: componentConfig.template
  });
}
