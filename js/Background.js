//Dante Coin Mechanic Change posititions as needed

/*var balance = 0;
window.setInterval(function () {
  balance += 51;
  document.getElementById("balance").innerHTML = balance;
}, 1000);*/
// Merch Store Functionality
function refresh_balance() {
  $.ajax({
    url: "balancethingy.php",
    type: "POST",
    data: 51,
    success: function (data) {
      $("#balance").html(data);
    },
  });
}
setInterval(function () {
  refresh_balance();
}, 1000);

var balance = document.getElementById("balance");

/*var mugInventory = 0;
var mugCost = 1800;
function buyMug() {
  var purchased = confirm("Confirm Purchase for Skull Mug?");

  if (purchased == true) {
    if (balance >= mugCost) {
      balance -= mugCost;
      document.getElementById("balance").innerHTML = balance;
      mugInventory += 1;
      alert("Purchase Successful");
      document.getElementById("MugInventory").innerHTML = mugInventory;
    } else {
      alert("Not Enough Dante Coins To Purchase Skull Mug");
    }
  } else {
    alert("Cancelled");
  }
}*/

function buyMug() {
  var purchased = confirm("Confirm Purchase for Skull Mug?");

  if (purchased == true) {
    $.ajax({
      url: "inventory.php",
      type: "POST",
      data: { data: 1 },
      success: function (data) {
        console.log(data);
      },
    });
  }
}

var posterInventory = 0;
var posterCost = 1800;
function buyPoster() {
  var purchased = confirm("Confirm Purchase for 7 Terraces Poster?");

  if (purchased == true) {
    if (balance >= posterCost) {
      balance -= posterCost;
      document.getElementById("balance").innerHTML = balance;
      posterInventory += 1;
      alert("Purchase Successful");
      document.getElementById("PosterInventory").innerHTML = posterInventory;
    } else {
      alert("Not Enough Dante Coins To Purchase 7 Terraces Poster");
    }
  } else {
    alert("Cancelled");
  }
}

var bearInventory = 0;
var bearCost = 1800;
function buyHeavenBear() {
  var purchased = confirm("Confirm Purchase for Heavenly Bear Plush?");

  if (purchased == true) {
    if (balance >= bearCost) {
      balance -= bearCost;
      document.getElementById("balance").innerHTML = balance;
      bearInventory += 1;
      alert("Purchase Successful");
      document.getElementById("BearInventory").innerHTML = bearInventory;
    } else {
      alert("Not Enough Dante Coins To Purchase Heavenly Bear Plush");
    }
  } else {
    alert("Cancelled");
  }
}

var uWaterInventory = 0;
var uWaterCost = 1800;
function buyUnholyWater() {
  var purchased = confirm("Confirm Purchase for Vial of Unholy Water?");

  if (purchased == true) {
    if (balance >= uWaterCost) {
      balance -= uWaterCost;
      document.getElementById("balance").innerHTML = balance;
      uWaterInventory += 1;
      alert("Purchase Successful");
      document.getElementById("UWaterInventory").innerHTML = uWaterInventory;
    } else {
      alert("Not Enough Dante Coins To Purchase Vial of Unholy Water");
    }
  } else {
    alert("Cancelled");
  }
}

var goatShirtInventory = 0;
var goatShirtCost = 3600;
function buyGoatshirt() {
  var purchased = confirm("Confirm Purchase for Goat Shirt?");

  if (purchased == true) {
    if (balance >= goatShirtCost) {
      balance -= goatShirtCost;
      document.getElementById("balance").innerHTML = balance;
      goatShirtInventory += 1;
      alert("Purchase Successful");
      document.getElementById(
        "GoatShirtInventory"
      ).innerHTML = goatShirtInventory;
    } else {
      alert("Not Enough Dante Coins To Purchase Goat Shirt");
    }
  } else {
    alert("Cancelled");
  }
}

var climbShirtInventory = 0;
var climbShirtCost = 3600;
function buyClimbShirt() {
  var purchased = confirm("Confirm Purchase for Ready To Climb Shirt?");

  if (purchased == true) {
    if (balance >= climbShirtCost) {
      balance -= climbShirtCost;
      document.getElementById("balance").innerHTML = balance;
      climbShirtInventory += 1;
      alert("Purchase Successful");
      document.getElementById(
        "ClimbShirtInventory"
      ).innerHTML = climbShirtInventory;
    } else {
      alert("Not Enough Dante Coins To Purchase Ready To Climb Shirt");
    }
  } else {
    alert("Cancelled");
  }
}

var godShirtInventory = 0;
var godShirtCost = 3600;
function buyGodShirt() {
  var purchased = confirm("Confirm Purchase for I Love God Shirt?");

  if (purchased == true) {
    if (balance >= godShirtCost) {
      balance -= godShirtCost;
      document.getElementById("balance").innerHTML = balance;
      godShirtInventory += 1;
      alert("Purchase Successful");
      document.getElementById(
        "GodShirtInventory"
      ).innerHTML = godShirtInventory;
    } else {
      alert("Not Enough Dante Coins To Purchase I Love God Shirt");
    }
  } else {
    alert("Cancelled");
  }
}

var hWaterInventory = 0;
var hWaterCost = 3600;
function buyHolyWater() {
  var purchased = confirm("Confirm Purchase for Vial of Holy Water?");

  if (purchased == true) {
    if (balance >= hWaterCost) {
      balance -= hWaterCost;
      document.getElementById("balance").innerHTML = balance;
      hWaterInventory += 1;
      alert("Purchase Successful");
      document.getElementById("HWaterInventory").innerHTML = hWaterInventory;
    } else {
      alert("Not Enough Dante Coins To Purchase Vial of Holy Water");
    }
  } else {
    alert("Cancelled");
  }
}
