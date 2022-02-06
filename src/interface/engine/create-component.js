import { registerComponent } from "./register-component";

let unique = 1;

export function createComponent(template, defaultName) {
  if (!template) return defaultName;

  let componentId = "custom-component-" + unique++;

  registerComponent(componentId, {
    template: template.innerHTML
  });

  return componentId;
}
