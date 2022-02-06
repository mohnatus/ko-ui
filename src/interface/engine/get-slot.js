export function getSlot(slotName, componentInfo) {
  let nodes = componentInfo.templateNodes;
  return nodes.find((node) => node.dataset.slot === slotName);
}
