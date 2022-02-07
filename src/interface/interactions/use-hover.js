export function useHover(element, onHover, onBlur) {
	if (!element) return;

	const onHoverCb = (e) => {
		if (e.target !== e.currentTarget) return;
		if (typeof onHover === 'function') onHover(e);
	};

	const onBlurCb = (e) => {
		if (e.target !== e.currentTarget) return;
		if (typeof onBlur === 'function') onBlur(e);
	};

	element.addEventListener('mouseenter', onHoverCb);
	element.addEventListener('mouseleave', onBlurCb);

	return () => {
		element.removeEventListener('mouseenter', onHoverCb);
		element.removeEventListener('mouseleave', onBlurCb);
	};
}
