//Dante Coin Mechanic Change posititions as needed

var balance = 0;
window.setInterval(function () {
  balance += 1000;
  document.getElementById("balance").innerHTML = balance;
}, 1000);

// Merch Store Functionality
var mugCost = 1800;
function buyMug() {
 var purchased = confirm("Confirm Purchase for Skull Mug?");
 
 if (purchased == true) {
  if (balance >= mugCost){
    balance -= mugCost;
    document.getElementById("balance").innerHTML = balance;
    alert("Purchase Successful")
  }
   else {
  alert("Not Enough Dante Coins To Purchase Skull Mug");
  };
}
 else {
  alert("Cancelled");
 }
};

var posterCost = 1800;
function buyPoster() {
 var purchased = confirm("Confirm Purchase for 7 Terraces Poster?");
 
 if (purchased == true) {
  if (balance >= posterCost){
    balance -= posterCost;
    document.getElementById("balance").innerHTML = balance;
    alert("Purchase Successful")
  }
   else {
  alert("Not Enough Dante Coins To Purchase 7 Terraces Poster");
  };
}
 else {
  alert("Cancelled");
 }
};

var bearCost = 1800;
function buyHeavenBear() {
 var purchased = confirm("Confirm Purchase for Heavenly Bear Plush?");
 
 if (purchased == true) {
  if (balance >= bearCost){
    balance -= bearCost;
    document.getElementById("balance").innerHTML = balance;
    alert("Purchase Successful")
  }
   else {
  alert("Not Enough Dante Coins To Purchase Heavenly Bear Plush");
  };
}
 else {
  alert("Cancelled");
 }
};

var uWaterCost = 1800;
function buyUnholyWater() {
 var purchased = confirm("Confirm Purchase for Vial of Unholy Water?");
 
 if (purchased == true) {
  if (balance >= uWaterCost){
    balance -= uWaterCost;
    document.getElementById("balance").innerHTML = balance;
    alert("Purchase Successful")
  }
   else {
  alert("Not Enough Dante Coins To Purchase Vial of Unholy Water");
  };
}
 else {
  alert("Cancelled");
 }
};

var goatShirtCost = 3600;
function buyGoatshirt() {
 var purchased = confirm("Confirm Purchase for Goat Shirt?");
 
 if (purchased == true) {
  if (balance >= goatShirtCost){
    balance -= goatShirtCost;
    document.getElementById("balance").innerHTML = balance;
    alert("Purchase Successful")
  }
   else {
  alert("Not Enough Dante Coins To Purchase Goat Shirt")
  };
 }
 else {
  alert("Cancelled");
 }
};

var hWaterCost = 3600;
function buyHolyWater() {
 var purchased = confirm("Confirm Purchase for Vial of Holy Water?");
 
 if (purchased == true) {
  if (balance >= hWaterCost){
    balance -= hWaterCost;
    document.getElementById("balance").innerHTML = balance;
    alert("Purchase Successful")
  }
   else {
  alert("Not Enough Dante Coins To Purchase Vial of Holy Water")
  };
 }
 else {
  alert("Cancelled");
 }
};

var godShirtCost = 3600;
function buyGodShirt() {
 var purchased = confirm("Confirm Purchase for I Love God Shirt?");
 
 if (purchased == true) {
  if (balance >= godShirtCost){
    balance -= godShirtCost;
    document.getElementById("balance").innerHTML = balance;
    alert("Purchase Successful")
  }
   else {
  alert("Not Enough Dante Coins To Purchase I Love God Shirt")
  };
 }
 else {
  alert("Cancelled");
 }
};

var climbShirtCost = 3600;
function buyClimbShirt() {
 var purchased = confirm("Confirm Purchase for Ready To Climb Shirt?");
 
 if (purchased == true) {
  if (balance >= climbShirtCost){
    balance -= climbShirtCost;
    document.getElementById("balance").innerHTML = balance;
    alert("Purchase Successful")
  }
   else {
  alert("Not Enough Dante Coins To Purchase Ready To Climb Shirt")
  };
 }
 else {
  alert("Cancelled");
 }
};