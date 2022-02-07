import { toJS, computed } from 'knockout';
import { registerBinding } from '@/interface/engine/register-binding';

import onPress from '@/interface/bindings/on-press';

registerBinding('onPress', onPress);


export default (params) => {
	const { date, onSelect, inactive, selected, fixed } = params;

	return {
		date: computed(() => {
			return toJS(date).getDate();
		}),
		selected,
		onPress() {
			if (inactive) return;
			if (typeof onSelect === 'function') {
				onSelect(date);
			}
		},
		inactive,
		selected,
		fixed
	};
};
