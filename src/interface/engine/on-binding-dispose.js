import { utils } from "knockout";

export function onBindingDispose(element, cb) {
  utils.domNodeDisposal.addDisposeCallback(element, function () {
    if (typeof cb === "function") cb();
  });
}
