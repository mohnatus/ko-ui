import { toJS, computed, observable } from 'knockout';
import { registerBinding } from '@/interface/engine/register-binding';
import { registerComponent } from '@/interface/engine/register-component';
import { useCalendarState } from '@/interface/states/use-calendar-state';
import * as CalendarDay from '../calendar-day';
import onPress from '@/interface/bindings/on-press';
import onHover from '@/interface/bindings/on-hover';

registerComponent('calendar-day', CalendarDay);
registerBinding('onPress', onPress);
registerBinding('onHover', onHover);

function getPeriodSelected(from, to, tempTo) {
	if (!from) return [];
	if (to) return [from, to];
	if (!tempTo) return [from, from];
	if (+tempTo > +from) return [from, tempTo];
	return [from, from];
}

export default (params) => {
	const { month, from, to, onSelect } = params;
	const { days } = useCalendarState(month);

	const tempTo = observable(null);

	from.subscribe(() => tempTo(null));
	to.subscribe(() => tempTo(null));

	const selected = computed(() => {
		let selected = getPeriodSelected(toJS(from), toJS(to), toJS(tempTo));
		return selected;
	});

	return {
		days,
		isSelected(day) {
			if (day.inactive) return;

			let dayDate = +day.date;
			let [fromDate, toDate] = toJS(selected);

			return fromDate && dayDate >= +fromDate && dayDate <= +toDate;
		},
		isFixed(day) {
			if (day.inactive) return;

			let dayDate = +day.date;
			return +toJS(from) === dayDate || +toJS(to) === dayDate;
		},
		onSelectDay(day) {
			if (typeof onSelect === 'function') {
				onSelect(day);
			}
		},
		onHoverDay(day, state) {
			if (to()) return;
			if (!state) {
				tempTo(null);
				return;
			}
			if (+day.date >= toJS(from)) {
				tempTo(day.date);
				return;
			}
			tempTo(null);
		},
	};
};
