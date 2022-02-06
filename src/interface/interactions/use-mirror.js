const props = [
	'fontFamily',
	'fontSize',
	'fontWeight',
	'fontStyle',
	'letterSpacing',
	'textTransform',
	'wordSpacing',
	'textIndent',
];

const events = [
	'keydown',
	'keyup',
	'input',
	'change',
	'blur',
	'paste',
	'propertychange',
];

export function useMirror(element) {
	const mirror = document.createElement('div');

	mirror.style.position = 'absolute';
	mirror.style.opacity = '0.5';
	mirror.style.whiteSpace = 'pre';

	element.parentElement.insertBefore(mirror, element.nextSiblingElement);

	function update() {
		const style = getComputedStyle(element);
		props.forEach((prop) => {
			mirror.style[prop] = style[prop];
		});
		mirror.textContent = element.value || element.placeholder;
		let width = mirror.scrollWidth;
		element.style.width = width + 'px';
	}

	events.forEach((event) => {
		element.addEventListener(event, update);
	});

	update();

	return [mirror, () => {
    events.forEach((event) => {
		element.removeEventListener(event, update);
	});
  }];
}
