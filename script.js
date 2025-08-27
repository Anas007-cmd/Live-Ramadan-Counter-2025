const ramadanDate = new Date("2026-02-17T00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeDifference = ramadanDate - now;

  if (timeDifference <= 0) {
    document.getElementById("countdown").innerText = "Ramadan has started!";
    clearInterval(countdownInterval);
    return;
  }

  var totalMilliseconds = timeDifference;
  var seconds = Math.floor((totalMilliseconds / 1000) % 60);
  var totalMinutes = Math.floor(totalMilliseconds / 1000 / 60);
  var minutes = totalMinutes % 60;
  var totalHours = Math.floor(totalMinutes / 60);
  var hours = totalHours % 24;
  var days = Math.floor(totalHours / 24);
  var months = Math.floor(days / 30);
  var remainingDays = days % 30;

  document.getElementById("months").innerText = months;
  document.getElementById("weeks").innerText = Math.floor(remainingDays / 7);
  document.getElementById("days").innerText = remainingDays % 7;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("milliseconds").innerText = Math.floor(
    (timeDifference % 1000) / 10
  );

  document.getElementById("monthslist").innerText = months;
  document.getElementById("weekslist").innerText = Math.floor(days / 7);
  document.getElementById("dayslist").innerText = remainingDays;
  document.getElementById("hourslist").innerText = totalHours;
  document.getElementById("minuteslist").innerText = totalMinutes;
  document.getElementById("secondslist").innerText = Math.floor(
    totalMilliseconds / 1000
  );
  document.getElementById("millisecondlist").innerText = totalMilliseconds;
}

function IslamicCalendar() {
  var hijriDate = moment().format("iD iMMMM iYYYY");
  var gregorianDate = new Date().toLocaleDateString();

  document.getElementById(
    "islamicCalendar"
  ).innerText = `Islamic Date: ${hijriDate}`;
  document.getElementById(
    "gregorianCalendar"
  ).innerText = `Today's Date: ${gregorianDate}`;
}

const countdownInterval = setInterval(updateCountdown, 100);
IslamicCalendar();
