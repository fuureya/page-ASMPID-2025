// Set the target date (set to your specific target date)
var targetDate = new Date("August 2, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function () {
  var now = new Date().getTime();
  var distance = targetDate - now;

  // Calculate time components
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the HTML elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown finishes, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
    alert("The event has started!");
  }
}, 1000);
