import { computed, toJS } from 'knockout';
import {
	cloneDate,
	getDaysSet,
	getMonthStart,
	getMonthEnd,
	getWeekStart,
	getWeekEnd,
	isDayOff,
	getNextDay,
	getDaysDiff,
} from '../utils/api/date';

const today = cloneDate(new Date());

export function getCalendarBoundaries(date) {
	const currentMonth = toJS(date);
	const startOfMonth = getMonthStart(currentMonth);
	const endOfMonth = getMonthEnd(currentMonth);
	const start = getWeekStart(startOfMonth);
	let end = getWeekEnd(endOfMonth);

	if (getDaysDiff(start, end) <= 35) {
		end = getNextDay(end);
		end = getWeekEnd(end);
	}

	return [start, end, startOfMonth, endOfMonth];
}

export function useCalendarState(date) {
	const month = computed(() => {
		return toJS(date).getMonth();
	});

	const days = computed(() => {
		const [start, end, startOfMonth, endOfMonth] = getCalendarBoundaries(
			toJS(date)
		);

		let startMoment = +startOfMonth;
		let endMoment = +getNextDay(endOfMonth);

		return getDaysSet(start, end).map((date) => {
			let moment = +date;
			return {
				date: date,
				moment,
				isDayOff: isDayOff(date),
				isToday: moment === +today,
				inactive: moment < startMoment || moment >= endMoment,
			};
		});
	});

	days.subscribe(v => {
		console.log('change', date(), v)
	})

	return { month, days };
}
