function itsYearLeap(year: number) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

// day is between 0 (sunday) and 6(saturday)
function dayCount(day: number) {
  return day > 0 && day < 6;
}

/**
 * Assign the project to an employee.
 * @param {number} year - Year per example 2022
 * @param {string} date - Date per example 12/01 (MM/DD)
 * @returns {string} date formated to YYYY/MM/DD
 */
function formatDate(year: number, date: string): string {
  const stringOfYear = year.toString();
  return date + "/" + stringOfYear;
}

function countHours(year: number, holidays: Array<string>) {
  const countableDays = holidays.filter((day) => {
    const formatedDay = formatDate(year, day);
    const date = new Date(formatedDay);
    const weekDay = date.getDay();
    return weekDay >= 1 && weekDay <= 5;
  });

  return countableDays.length * 2;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays); // 2 days -> 4 extra hours in the year
