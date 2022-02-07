const handler = (element, valueAccessor) => {
		let ref = valueAccessor();
		console.log('ref', ref, element)
		if (!ref.isRef) return;
		ref.set(element);
	}


export default {
	init: handler,
	update: handler
};
