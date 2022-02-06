export function triggerEvent(element, eventName, eventData) {
  let event = new Event(eventName);
  event.detail = eventData;
  element.dispatchEvent(event);
}