export function useOutClick(elements, onClick) {
	if (!Array.isArray(elements)) {
		elements = [elements];
	}
	elements = elements.filter(Boolean);

	const cb = (e) => {
		console.log('click', elements)
		let isInside = elements.find((el) => {
			if (el instanceof HTMLElement) return el.contains(e.target);
			if (el.isRef) {
				return el.applyImmediately((element) => {
					return element.contains(e.target);
				});
			}
		});

		if (!isInside) {
			if (typeof onClick === 'function') onClick();
		}
	};

	document.addEventListener('click', cb);

	return () => {
		document.removeEventListener('click', cb);
	};
}
