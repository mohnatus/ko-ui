import { applyBindings, observable, toJS } from 'knockout';
import * as DateCalendar from '@/interface/components/calendar/date-calendar';
import * as PeriodCalendar from '@/interface/components/calendar/period-calendar';
import { registerComponent } from '@/interface/engine/register-component';
import { usePeriod } from '../../interface/states/use-period';
import { getNextMonth, getPrevMonth } from '../../interface/utils/api/date';

registerComponent('date-calendar', DateCalendar);
registerComponent('period-calendar', PeriodCalendar);

const ViewModel = () => {
	const month1 = observable(new Date());
	const month2 = observable(new Date());
	const selectedDate = observable(null);

	const { from, to, setDate } = usePeriod();

	return {
		month1,
		month2,

		selectedDate,
		onSelectDate(date) {
			selectedDate(date);
		},
		from,
		to,

		onSelectPeriod(date) {
			setDate(date);
		},

		prevMonth(date) {
			date(getPrevMonth(date()));
		},

		nextMonth(date) {
			date(getNextMonth(date()));
		},
	};
};

applyBindings(ViewModel(), document.getElementById('app'));
