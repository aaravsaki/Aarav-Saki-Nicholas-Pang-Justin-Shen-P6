//Dante Coin Mechanic

var balance = 0;
window.setInterval(function () {
  balance = balance + 10;
  document.getElementById("balance").innerHTML = "Dante Coins: " + balance;
}, 1000);

// Merch Store Button Confirm Prompt Mechanic

function buyFunction() {
 var purchased = confirm("Confirm Purchase?");
 var testOut;
 if (purchased == true) {
  testOut = "Purchased";
 }
 else {
  testOut =  "Cancelled";
 }
 document.getElementById("confirmTest").innerHTML = testOut;  
};

//Merch Pricing
window.addEventListener('DOMContentLoaded', (event) => {
  var priceOne = parseInt(document.getElementById("price1").value);
  console.log(priceOne)
  var priceTwo = parseInt(document.getElementById("price2").value)
  console.log(priceTwo)
  var priceThree = parseInt(document.getElementById("price3").value)
  console.log(priceThree)
});