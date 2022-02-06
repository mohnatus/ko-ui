export function flattenList(list, childrenProp = "items") {
  let result = [];

  let flattenItem = (item, level, parent) => {
    let _item = {
      ...item,
      level,
      parent: parent
    };

    result.push(_item);

    if (childrenProp in item && Array.isArray(item[childrenProp])) {
      _item[childrenProp].forEach((i) => flattenItem(i, level + 1, item.id));
    }
  };

  list.forEach((o) => flattenItem(o, 0));

  return result;
}
