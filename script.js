function countdown(count, callback) {
  if (count > 0) {
    setTimeout(function () {
      document.getElementById("countdown").textContent = count;
      countdown(count - 1, callback);
    }, 1000);
  } else {
    setTimeout(function () {
      document.getElementById("countdown").textContent =
        "Happy Independence Day";
      callback();
    }, 1000);
  }
}

countdown(10, function () {
  // Additional code to execute after countdown
  console.log("Countdown completed!");
});
