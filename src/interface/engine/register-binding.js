import { bindingHandlers } from "knockout";

export function registerBinding(bindingName, bindingObject) {
  bindingHandlers[bindingName] = bindingObject;
}
