var balance = 0;
window.setInterval(function () {
  balance = balance + 10;
  document.getElementById("balance").innerHTML = "Dante Coins: " + balance;
}, 1000);


