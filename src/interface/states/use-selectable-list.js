/**
 * Список с возможностью выбора элементов
 */

import { computed, toJS } from "knockout";

export function useSelectableList(list, value, multiple) {
  const selected = computed(() => {
    let currentValue = toJS(value);
    if (Array.isArray) return currentValue;
    return [currentValue];
  });

  const selectedItems = computed(() => {
    let options = toJS(list);
    let selectedIds = toJS(selected);

    if (!Array.isArray(selectedIds)) selectedIds = [selectedIds];

    return options.filter((item) => {
      return selectedIds.includes(item.id);
    });
  });

  function onSelect(item) {
    if (!multiple) {
      if (value === item.id) value(null);
      else value(item.id);
    } else {
      let currentValue = toJS(value);
      if (currentValue.includes(item.id)) {
        let newValue = currentValue.filter((id) => {
          return item.id !== id;
        });
        value(newValue);
      } else {
        value([...currentValue, item.id]);
      }
    }
  }

  function resetList() {
    if (multiple) value([]);
    else value(null);
  }

  function removeItem(itemId) {
    let currentValue = toJS(value);
    let newValue = currentValue.filter((id) => {
      return itemId !== id;
    });
    value(newValue);
  }

  return {
    selected,
    selectedItems,
    onSelect,
    resetList,
    removeItem
  };
}
