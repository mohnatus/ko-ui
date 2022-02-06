export function useKeyboardBinding(keys, onEvent) {
	if (!Array.isArray(keys)) keys = [keys];
	const callback = (e) => {
		console.log(e);
		if (typeof onEvent === 'function') {
			if (keys.some((key) => e.key === key)) onEvent(e);
		}
	};

	document.addEventListener('keydown', callback);

	return () => {
		document.removeEventListener('keydown', callback);
	};
}
