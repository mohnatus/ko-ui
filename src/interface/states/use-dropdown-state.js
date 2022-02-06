import { observable } from "knockout";

export function useDropdownState(defaultValue = false) {
  const isOpen = observable(defaultValue);

  return [
    isOpen,
    (value) => {
      isOpen(value)
    }
  ]
}