import { computed, toJS } from "knockout";

export default function (params) {
  const { selected, itemComponentName, onRemove, filter } = params;

  return {
    selected,
    itemComponentName,
    filter,

    removeItem(item) {
      if (typeof onRemove === "function") {
        onRemove(item);
      }
    }
  };
}
