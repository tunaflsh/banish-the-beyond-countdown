const countdownElement = document.getElementById("countdown");


function getSecondFriday(year, month) {
  const weekday = new Date(`${year}-${month}-01`).getDay();
  const secondFriday = String(1 + 7 + (5 - weekday + 7) % 7).padStart(2, "0");

  return new Date(`${year}-${month}-${secondFriday}T17:00:00Z`);  // second Friday of the month
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
  const month = 10;  // Banish the Beyond starts in October
  const year = now.getUTCFullYear();
  let eventStart = getSecondFriday(year, month);

  const eventDuration = 2030400000;  // 23d 12h (in milliseconds)
  const eventEnd = new Date(eventStart.getTime() + eventDuration);

  if (eventStart <= now && now < eventEnd) {  // The event is ongoing
    countdownElement.innerHTML = getDDHHMMSS(eventEnd - now) + '<br>left to banish them beyond';
    return;
  }

  if (eventEnd <= now) {  // the next event will start next year
    eventStart = getSecondFriday(year + 1, month);
  }

  countdownElement.innerHTML = getDDHHMMSS(eventStart - now) + '<br>until the spirit is released';
}


update();  // Initial call to display immediately
setInterval(update, 50);  // Update 20 times per second for responsiveness
