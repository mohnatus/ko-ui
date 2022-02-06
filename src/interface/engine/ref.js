import { observable, toJS } from 'knockout';

export function Ref() {
	const element = observable(null);

	function get() {
		return Promise((res) => {
			if (element()) {
				res(element());
			} else {
				let ss = element.subscribe((v) => {
					if (v) {
						ss.dispose();
						res(v);
					}
				});
			}
		});
	}

	return {
		isRef: true,
		apply(cb) {
			return get().then((el) => cb(el));
		},
		applyImmediately(cb) {
			let el = element();
			console.log('apply', el);
			if (el) return cb(el);
			return null;
		},
		set(el) {
			console.log('set', el);
			element(el);
		},
	};
}
