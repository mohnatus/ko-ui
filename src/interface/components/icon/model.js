import { computed, toJS } from 'knockout';

export default (params) => {
	const { name, width, height, size, color, componentName } = params;

	return {
		componentName,
    color,
		href: computed(() => {
      return '#' + toJS(name)
    }),
		width: computed(() => {
			return toJS(size) || toJS(width);
		}),
		height: computed(() => {
      return toJS(size) || toJS(height)
    }),
	};
};
