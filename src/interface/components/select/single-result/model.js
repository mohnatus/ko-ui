import { computed, toJS } from "knockout";

export default function (params) {
  const { selected, clearable, itemComponentName, onReset } = params;

  return {
    selected,
    clearable,
    itemComponentName,
    onReset() {
      if (typeof onReset === "function") {
        onReset();
      }
    }
  };
}
