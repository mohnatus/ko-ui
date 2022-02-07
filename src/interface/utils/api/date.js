export function cloneDate(date) {
	let clone = new Date(+date);
	clone.setHours(0, 0, 0, 0);
	return clone;
}
export function getNextDay(date) {
	let clone = cloneDate(date);
	clone.setDate(clone.getDate() + 1);
	return clone;
}

export function getPrevMonth(date) {
	let clone = cloneDate(date);
	clone.setMonth(clone.getMonth() - 1);
	return clone;
}

export function getNextMonth(date) {
	let clone = cloneDate(date);
	clone.setMonth(clone.getMonth() + 1);
	return clone;
}

export function getMonthStart(date) {
	let clone = cloneDate(date);
	clone.setDate(1);
	return clone;
}

export function getMonthEnd(date) {
	let clone = cloneDate(date);
	clone.setDate(1);
	clone.setMonth(clone.getMonth() + 1);
	clone.setDate(0);
	return clone;
}

export function getWeekStart(date) {
	let clone = cloneDate(date);

	let day = clone.getDay();
	if (day === 1) return clone;

	if (day === 0) {
		clone.setDate(clone.getDate() - 6);
		return clone;
	}

	clone.setDate(clone.getDate() - (day - 1));
	return clone;
}

export function getWeekEnd(date) {
	let clone = cloneDate(date);

	let day = clone.getDay();
	if (day === 0) return clone;

	clone.setDate(clone.getDate() + (7 - day));

	return clone;
}

export function getDaysSet(startDate, endDate) {
	let days = [];

	let currentDate = cloneDate(startDate);
	while (+currentDate <= +endDate) {
		days.push(currentDate);
		currentDate = getNextDay(currentDate);
	}

	return days;
}

export function isDayOff(date) {
	let day = date.getDay();
	return day === 0 || day === 6;
}

export function getDaysDiff(date1, date2) {
	let diff = cloneDate(date2) - cloneDate(date1);
	return diff / 1000 / 60 / 60 / 24;
}
