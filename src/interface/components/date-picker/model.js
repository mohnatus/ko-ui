import { computed, observable, toJS } from 'knockout';
import { registerComponent } from '@/interface/engine/register-component';
import { registerBinding } from '@/interface/engine/register-binding';
import { Ref } from '@/interface/engine/ref';

import { useDropdownState } from '@/interface/states/use-dropdown-state';

import * as DateCalendar from '@/interface/components/calendar/date-calendar';
import * as Input from '@/interface/components/input';
import * as CalendarIcon from '@/interface/icons/calendar';
import RefBinding from '@/interface/bindings/ref';
import DropdownTrigger from '@/interface/bindings/dropdown-trigger';
import { dateFromString, formatDate } from '../../utils/api/date';

registerComponent('date-calendar', DateCalendar);
registerComponent('c-input', Input);
registerComponent('calendar-icon', CalendarIcon);
registerBinding('dropdownTrigger', DropdownTrigger);
registerBinding('ref', RefBinding);

export default (params) => {
	const { value } = params;
	const inputValue = observable(toJS(''));
	const month = observable(new Date());

	let date = toJS(value);
	if (date) {
		month(date);
		inputValue(formatDate(date));
	}

	inputValue.subscribe((v) => {
		
		let newDate = dateFromString(v);
		if (newDate) value(newDate);
	});

	const [isOpen, setIsOpen] = useDropdownState(false);

	const boxRef = Ref();

	return {
		month,
		value,
		inputValue,
		isOpen,
		boxRef,

		onSelect(date) {
			value(date);
			inputValue(formatDate(date));
			setIsOpen(false);
		},
	};
};
