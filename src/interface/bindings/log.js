function handler(...params) {
	params.forEach((param) => console.log(param));
}

export default {
	init: handler,
	update: handler,
};
