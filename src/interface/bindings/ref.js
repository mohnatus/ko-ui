
export default {
	init(element, valueAccessor) {
		let ref = valueAccessor();
		if (!ref.isRef) return;
		ref.set(element);
	},
};
