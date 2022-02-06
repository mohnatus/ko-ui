import { computed, observable, toJS } from "knockout";

export function useFilteredList(list, fields = []) {
  let filter = observable("");
  let filteredList = computed(() => {
    let q = filter().trim();
    let items = toJS(list);

    if (!q) return items;
    q = q.toUpperCase();

    let filtered = items.filter((item) => {
      return fields.find((fieldName) => {
        let fieldValue = item[fieldName];
        if (!fieldValue) return false;
        fieldValue = fieldValue.toUpperCase();
        return fieldValue.includes(q);
      });
    });

    return filtered;
  });

  return {
    filter,
    filteredList,
    resetFilter: () => {
      filter("");
    }
  };
}
