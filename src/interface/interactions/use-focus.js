import { observable } from 'knockout';

export function useFocus(element, onFocus, onBlur) {
	const isFocused = observable(false);

	const onFocusCb = (e) => {
		isFocused(true);
		if (typeof onFocus === 'function') onFocus(e);
	};

	const onBlurCb = (e) => {
		isFocused(false);
		if (typeof onBlur === 'function') onBlur(e);
	};

	element.addEventListener('focus', onFocusCb);
	element.addEventListener('blur', onBlurCb);

	return {
    isFocused,
		dispose: () => {
			element.removeEventListener('focus', onFocusCb);
			element.removeEventListener('blur', onBlurCb);
		},
		setFocus: () => {
			element.focus();
		},
	};
}
