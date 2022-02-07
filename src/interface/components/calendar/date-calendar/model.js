import { registerBinding } from '@/interface/engine/register-binding';
import { registerComponent } from '@/interface/engine/register-component';
import { useCalendarState } from '@/interface/states/use-calendar-state';
import onPress from '@/interface/bindings/on-press';
import log from '@/interface/bindings/log';
import * as CalendarDay from '../calendar-day';
import { toJS } from 'knockout';

registerBinding('onPress', onPress);
registerBinding('log', log);
registerComponent('calendar-day', CalendarDay);

export default (params) => {
	const { month, selected, onSelect } = params;
	const { days } = useCalendarState(month);

	return {
		days,
		selected,
		onSelectDay(day) {
			if (typeof onSelect === 'function') {
				onSelect(day);
			}
		},
	};
};
