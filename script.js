const countdownElement = document.getElementById("countdown");


/**
 * Returns nth weekday of the month. Example:
 * `getNthWeekday(2, 2025, 10, 5, 17)`
 * will return the second Friday of October in 2025, at 17:00, October 10, 2025.
 *
 * @param {number} n the order of the weekday in the month
 * @param {number} year
 * @param {number} month the month number starts from 1 in January
 * @param {number} weekday the weekday number starts from 0 on Sunday
 * @param {number} [hour=0] the hour of the day in UTC (24h format)
 * @param {number} [minute=0] the minute of the hour
 * @param {number} [second=0] the second of the minute
 * @return {Date}
 */
function getNthWeekday(n, year, month, weekday, hour=0, minute=0, second=0) {
  const firstWeekday = new Date(`${year}-${month}-01`).getDay();
  const nthWeekday = String(1 + 7*(n-1) + (weekday - firstWeekday + 7) % 7).padStart(2, "0");
  hour = String(hour).padStart(2, "0");
  minute = String(minute).padStart(2, "0");
  second = String(second).padStart(2, "0");

  return new Date(`${year}-${month}-${nthWeekday}T${hour}:${minute}:${second}Z`);  // nth weekday of the month
}


function getDDHHMMSS(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


function update() {
  const now = new Date();
  const year = now.getUTCFullYear();
  let eventStart = getNthWeekday(2, year, 10, 5);  // second Friday of October

  const eventEnd = getNthWeekday(1, year, 11, 1);  // first Monday of November

  if (eventStart <= now && now < eventEnd) {  // The event is ongoing
    countdownElement.innerHTML = getDDHHMMSS(eventEnd - now) + '<br>left to banish them beyond';
    return;
  }

  if (eventEnd <= now) {  // the next event will start next year
    eventStart = getNthWeekday(2, year + 1, 10, 5);
  }

  countdownElement.innerHTML = getDDHHMMSS(eventStart - now) + '<br>until the spirit is released';
}


update();  // Initial call to display immediately
setInterval(update, 50);  // Update 20 times per second for responsiveness
