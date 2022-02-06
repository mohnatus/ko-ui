import { computed, toJS } from 'knockout';
import { registerComponent } from '@/interface/engine/register-component';
import { registerBinding } from '@/interface/engine/register-binding';
import { Ref } from '@/interface/engine/ref';

import { useFilteredList } from '@/interface/states/use-filtered-list';
import { useSelectableList } from '@/interface/states/use-selectable-list';
import { useDropdownState } from '@/interface/states/use-dropdown-state';

import DropdownTrigger from '@/interface/bindings/dropdown-trigger';
import RefBinding from '@/interface/bindings/ref';
import * as SelectableList from '../selectable-list';
import * as SingleSelectResult from './single-result';
import * as MultipleSelectResult from './multiple-result';

registerComponent('select-list', SelectableList);
registerComponent('single-select-result', SingleSelectResult);
registerComponent('multiple-select-result', MultipleSelectResult);
registerBinding('dropdownTrigger', DropdownTrigger);
registerBinding('ref', RefBinding);

export default (params) => {
	const { multiple, options, disabled, clearable, value, searchable } =
		params;

	const { selected, selectedItems, onSelect, resetList, removeItem } =
		useSelectableList(options, value, multiple);

	const { filter, filteredList, resetFilter } = useFilteredList(options, [
		'text',
	]);

	const [isOpen, setIsOpen] = useDropdownState(false);

	const boxRef = Ref();

	let resultComponentName = params.resultComponentName;
	let optionComponentName = params.optionComponentName;

	return {
		multiple,
		disabled,
		clearable,
		withSearch: computed(() => {
			if (multiple) return false;
			return toJS(searchable);
		}),
		selected,
		selectedItems,
		onSelect(item) {
			onSelect(item);
			setIsOpen(false);
			resetFilter();
		},
		filter,
		filteredList,
		resetFilter,
		resultComponentName,
		optionComponentName,
		onReset() {
			resetList();
		},
		onRemoveItem(item) {
			removeItem(item.id);
		},
		isOpen,
		boxRef,
	};
};
