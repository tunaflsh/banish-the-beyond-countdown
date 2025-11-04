// --- Step 1: Set your target date ---
// The format is "YYYY-MM-DD"
const targetDate = new Date("2026-10-10");

// --- Step 2: Get the HTML element to display the countdown ---
const countdownElement = document.getElementById("countdown");

// --- Step 3: Create a function to calculate and display the time ---
function updateCountdown() {
  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  const difference = targetDate - now;

  // --- Calculations for days ---
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  // --- Display the result ---
  if (difference < 0) {
    // If the countdown is over, display a message
    countdownElement.innerHTML = "The event has started!";
  } else {
    // Otherwise, display the remaining days
    countdownElement.innerHTML = `${days} days left`;
  }
}

// --- Step 4: Run the function every second to keep it updated ---
// Initial call to display immediately
updateCountdown();
// Update every second
setInterval(updateCountdown, 1000);
