import { computed, toJS } from 'knockout';

export default (params) => {
	const { name, width, height, size } = params;

	return {
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
