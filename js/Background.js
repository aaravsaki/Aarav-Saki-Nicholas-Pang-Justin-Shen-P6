//Dante Coin Mechanic Change posititions as needed

var balance = 0;
window.setInterval(function () {
  balance += 10;
  document.getElementById("balance").innerHTML = "Dante Coins: " + balance;
}, 1000);

// Merch Store Button Confirm Prompt Mechanic x9 for all products Change Messages and Costs Accordingly
var shirts = 0;
var shirtCost = 10;
function buyHeaven3() {
 var purchased = confirm("Confirm Purchase?");
 
 if (purchased == true) {
  if (balance >= shirtCost){
    testOut = "Purchased"
    shirts += 1;
    balance -= shirtCost;
    document.getElementById("shirts").innerHTML = shirts;
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("confirmTest").innerHTML = testOut;
  }
   else {
  alert("Not Enough Dante Coins To Purchase I Love God T-Shirt");
  };
}
 else {
  testOut =  "Cancelled";
 }
 document.getElementById("confirmTest").innerHTML = testOut; 
};

//New