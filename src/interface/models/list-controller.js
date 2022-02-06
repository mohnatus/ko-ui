import { observableArray, computed } from "knockout";
import { flattenList } from "../utils/flat-list";

export default function ListController(config = {}) {
  let list = observableArray([]);

  let flatList = computed(() => {
    return flattenList(list(), config.childrenProp);
  });

  return {
    list,
    flatList,
    set(items) {
      list(items);
    }
  };
}
