import { describe, expect, test } from "@jest/globals";
import { getCalendarBoundaries } from "./use-calendar-state";

describe("getCalendarBoundaries", () => {
  const date = new Date(2022, 1, 3);
  const fromDate = new Date(2022, 0, 31);
  const toDate = new Date(2022, 2, 6);
  const [from, to] = getCalendarBoundaries(date);

  test("Starts with the beginnig of the current week", () => {
    expect(+from).toBe(+fromDate);
  });
  test("Ends with the end of the last week of the month", () => {
    expect(+to).toBe(+toDate);
  })
})