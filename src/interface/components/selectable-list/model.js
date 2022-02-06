
import { registerComponent } from '@/interface/engine/register-component';
import { registerBinding } from '@/interface/engine/register-binding';
import * as ListItem from './list-item';
import onPress from '@/interface/bindings/on-press';
import { toJS } from 'knockout';

registerComponent('simple-list-item', ListItem);
registerBinding('onPress', onPress);

export default (params) => {
	const { items, selected, onSelect, disabled } = params;

	let itemComponentName = params.itemComponentName || 'simple-list-item';

	function onPress(item) {
		if (isDisabled(item)) return;
		if (item.inactive) return;
		if (typeof onSelect === 'function') {
			onSelect(item);
		}
	}

	function isSelected(item) {
		let ids = toJS(selected);
		if (Array.isArray(ids)) return ids.includes(item.id);
		return item.id === ids;
	}

	function isDisabled(item) {
		if (item.disabled) return true;
		let ids = toJS(disabled);
		if (!ids || !Array.isArray(ids)) {
			return;
		}
		return ids.includes(item.id);
	}

	function getLevelOffset(item) {
		return `calc(${item.level} * var(--list-level-offset))`;
	}

	return {
		itemComponentName,
		items,
		selected,
		onPress,
		isSelected,
		isDisabled,
		getLevelOffset,
	};
};
