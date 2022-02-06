
export function usePress(element, onPress) {
	if (!element || typeof onPress !== 'function') return null;
	const onPressCallback = (e) => {
		onPress(e.type);
	};
	element.addEventListener('click', onPressCallback);

	return () => {
		element.removeEventListener('click', onPressCallback);
	};
}
