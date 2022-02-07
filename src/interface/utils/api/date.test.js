import { describe, expect, test } from '@jest/globals';
import {
	cloneDate,
	getMonthStart,
	getMonthEnd,
	getNextDay,
	getWeekStart,
	getWeekEnd,
	isDayOff,
	getDaysSet,
	getDaysDiff,
} from './date.js';

describe('cloneDate', () => {
	const date = new Date(2020, 3, 14, 12, 12, 12);
	const expected = new Date(2020, 3, 14);

	test("Clone date isn't original date", () => {
		expect(cloneDate).not.toBe(date);
	});

	test('Clone date is the start of the day', () => {
		expect(+cloneDate(date)).toBe(+expected);
	});
});

describe('getNextDay', () => {
	test('Returns correct next day in the middle of the month', () => {
		const date = new Date(2020, 3, 14, 12, 12, 12);
		const expected = new Date(2020, 3, 15);
		expect(+getNextDay(date)).toBe(+expected);
	});
	test('Returns correct next day in the end of the month', () => {
		const date = new Date(2020, 3, 30, 12, 12, 12);
		const expected = new Date(2020, 4, 1);
		expect(+getNextDay(date)).toBe(+expected);
	});
});

describe('getMonthStart', () => {
	test('Returns correct day in the middle of the month', () => {
		const date = new Date(2020, 3, 14, 12, 12, 12);
		const expected = new Date(2020, 3, 1);
		expect(+getMonthStart(date)).toBe(+expected);
	});
	test('Returns correct day in the beginning of the month', () => {
		const date = new Date(2020, 3, 1, 12, 12, 12);
		const expected = new Date(2020, 3, 1);
		expect(+getMonthStart(date)).toBe(+expected);
	});
});

describe('getMonthEnd', () => {
	test('Returns correct day in the middle of the month', () => {
		const date = new Date(2020, 3, 14, 12, 12, 12);
		const expected = new Date(2020, 3, 30);
		expect(+getMonthEnd(date)).toBe(+expected);
	});
	test('Returns correct day in the end of the month', () => {
		const date = new Date(2020, 3, 30, 12, 12, 12);
		const expected = new Date(2020, 3, 30);
		expect(+getMonthEnd(date)).toBe(+expected);
	});
});

describe('getWeekStart', () => {
	test('Returns the same day for monday', () => {
		const date = new Date(2022, 1, 7, 12, 12, 12);
		const expected = new Date(2022, 1, 7);
		expect(+getWeekStart(date)).toBe(+expected);
	});
	test('Returns previous monday for sunday', () => {
		const date = new Date(2022, 1, 13, 12, 12, 12);
		const expected = new Date(2022, 1, 7);
		expect(+getWeekStart(date)).toBe(+expected);
	});
	test('Returns previous monday for other days', () => {
		const date = new Date(2022, 1, 10, 12, 12, 12);
		const expected = new Date(2022, 1, 7);
		expect(+getWeekStart(date)).toBe(+expected);
	});
});

describe('getWeekEnd', () => {
	test('Returns the same day for sunday', () => {
		const date = new Date(2022, 1, 13, 12, 12, 12);
		const expected = new Date(2022, 1, 13);
		expect(+getWeekEnd(date)).toBe(+expected);
	});
	test('Returns next sunday for other days', () => {
		const date = new Date(2022, 1, 8, 12, 12, 12);
		const expected = new Date(2022, 1, 13);
		expect(+getWeekEnd(date)).toBe(+expected);
	});
});

describe('isDayOff', () => {
	test('Returns true for sunday', () => {
		const date = new Date(2022, 1, 13, 12, 12, 12);
		expect(isDayOff(date)).toBeTruthy();
	});
	test('Returns true for saturday', () => {
		const date = new Date(2022, 1, 12, 12, 12, 12);
		expect(isDayOff(date)).toBeTruthy();
	});
	test('Returns next sunday for other days', () => {
		const date = new Date(2022, 1, 8, 12, 12, 12);
		expect(isDayOff(date)).toBeFalsy();
	});
});

describe('getDaysSet', () => {
	const from = new Date(2022, 0, 30);
	const to = new Date(2022, 1, 9);

	const days = getDaysSet(from, to);

	test('Returns correct number of days', () => {
		expect(days.length).toBe(11);
	});
	test('Starts with the from date', () => {
		expect(+days[0]).toBe(+from);
	});
	test('Ends with the to date', () => {
		expect(+days[days.length - 1]).toBe(+to);
	});
});

describe('getDaysDiff', () => {
	let date1 = new Date();
	let date2 = new Date(+date1);
	date2.setDate(date2.getDate() + 2);
	test('Returns positive value for positive diff', () => {
		expect(getDaysDiff(date1, date2)).toBe(2);
	});
	test('Returns negative value for negative diff', () => {
		expect(getDaysDiff(date2, date1)).toBe(-2);
	});
	test('Returns zero value if days are the same', () => {
		expect(getDaysDiff(date1, date1)).toBe(0);
	});
});
