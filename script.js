// --- Step 1: Set your target date ---
// The format is "YYYY-MM-DD"
const targetDate = new Date("2026-10-10T12:00:00-05:00");

// --- Step 2: Get the HTML element to display the countdown ---
const countdownElement = document.getElementById("countdown");

// --- Step 3: Create a function to calculate and display the time ---
function updateCountdown() {
  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  const difference = targetDate - now;

  // --- Calculations for days, hours, minutes, seconds ---
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // --- Display the result ---
  if (difference < 0) {
    // If the countdown is over, display a message
    countdownElement.innerHTML = "The event has started!";
  } else {
    // Display the full countdown
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

// --- Step 4: Run the function every second to keep it updated ---
// Initial call to display immediately
updateCountdown();
// Update every second
setInterval(updateCountdown, 1000);
