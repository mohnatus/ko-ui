import { useFocus } from '@/interface/interactions/use-focus';
import { useKeyboardBinding } from '@/interface/interactions/use-keyboard-binding';

export function usePress(element, onPress) {
	if (!element || typeof onPress !== 'function') return null;
	const onPressCallback = (e) => {
		onPress(e.type);
	};
	element.addEventListener('click', onPressCallback);

	const { isFocused, dispose: disposeFocus } = useFocus(element);
	const disposeKeyBinding = useKeyboardBinding(['Enter', 'Space'], (e) => {
		if (!isFocused()) return;
		onPressCallback(e);
	});

	return () => {
		element.removeEventListener('click', onPressCallback);
		disposeFocus();
		disposeKeyBinding();
	};
}
