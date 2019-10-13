// What is your favourite day of the week? Check if it's the most frequent day
// of the week in the year.

// You are given a year as integer (e. g. 2001). You should return the most
// frequent day(s) of the week in that year. The result has to be a list of days
// sorted by the order of days in week (e. g. ['Monday', 'Tuesday']). Week
// starts with Monday.

// Input: Year as an int.

// Output: The list of most frequent days sorted by the order of days in week
// (from Monday to Sunday).

// Preconditions: Year is between 1 and 9999. Week starts with Monday. Calendar
// is Gregorian.

// Example:

// most_frequent_days(2427) == ['Friday'] most_frequent_days(2185) ==
// ['Saturday'] most_frequent_days(2860) == ['Thursday', 'Friday']

function mostFrequentDays(year) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var firstDay = new Date("January 01, " + year);
  var answer = [];
  answer.push(days[firstDay.getDay()]);
  if ((year % 4 === 0 && year % 100 !== 0) | (year % 400 === 0)) {
    answer.push(days[firstDay.getDay() + 1]);
    if (answer[0] == "Sunday") answer = ["Monday", "Sunday"];
  }
  return answer;
}
