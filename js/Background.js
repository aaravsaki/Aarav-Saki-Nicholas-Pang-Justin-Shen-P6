//Dante Coin Mechanic Change posititions as needed
// Merch Store Functionality


var balance = 0;
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

//Refreshes balance every second
setInterval(function () {
  refresh_balance();
  balance = parseInt(document.getElementById("balance").innerHTML);
}, 1000);

//Refreshes item inventories based on logged in user
function refreshInventory(){
  $.ajax({
    url: "inventory.php",
    type: "GET",
    dataType: 'json',
    success: function (data) {
      MugInventory = data[0];
      document.getElementById("MugInventory").innerHTML = MugInventory;

      posterInventory = data[1];
      document.getElementById("PosterInventory").innerHTML = posterInventory;

      bearInventory = data[2];
      document.getElementById("BearInventory").innerHTML = bearInventory;

      uWaterInventory = data[3];
      document.getElementById("UWaterInventory").innerHTML = uWaterInventory;

      goatShirtInventory = data[4];
      document.getElementById("GoatShirtInventory").innerHTML = goatShirtInventory;

      climbShirtInventory = data[5];
      document.getElementById("ClimbShirtInventory").innerHTML = climbShirtInventory;

      godShirtInventory = data[6];
      document.getElementById("GodShirtInventory").innerHTML = godShirtInventory;

      hWaterInventory = data[7];
      document.getElementById("HWaterInventory").innerHTML = hWaterInventory;
    },
  });
}

var MugInventory = 0;
var MugCost = 1800;
function buyMug() {
  var purchased = confirm("Confirm Purchase for Skull Mug?");
  if (purchased == true) {
    if (balance >= MugCost) {
      $.ajax({
        url: "inventory.php",
        type: "POST",
        data: { id: 1, cost: MugCost },
        success: function (data) {
          console.log(data);
          MugInventory = data;
          document.getElementById("MugInventory").innerHTML = MugInventory;
        },
      });
    } else {
      alert("Not Enough Dante Coins To Purchase Skull Mug");
    }
  }
  else {
    alert("Cancelled")
  }
}

var posterInventory = 0;
var posterCost = 1800;
function buyPoster() {
  var purchased = confirm("Confirm Purchase for 7 Terraces Poster?");
  if (purchased == true) {
    if (balance >= posterCost) {
      $.ajax({
        url: "inventory.php",
        type: "POST",
        data: { id: 2, cost: posterCost },
        success: function (data) {
          posterInventory = data;
          document.getElementById("PosterInventory").innerHTML = posterInventory;
        },
      });
    } else {
      alert("Not Enough Dante Coins To Purchase 7 Terraces Poster");
    }
  }
  else {
    alert("Cancelled")
  }
}

var bearInventory;
var bearCost = 1800;
function buyHeavenBear() {
  var purchased = confirm("Confirm Purchase for Heavenly Bear Plush?");
  if (purchased == true) {
    if (balance >= bearCost) {
      $.ajax({
        url: "inventory.php",
        type: "POST",
        data: { id: 3, cost: bearCost },
        success: function (data) {
          bearInventory = data;
          document.getElementById("BearInventory").innerHTML = bearInventory;
        },
      });
    } else {
      alert("Not Enough Dante Coins To Purchase Heavenly Bear Plush");
    }
  }
  else {
    alert("Cancelled")
  }
}

var uWaterInventory = 0;
var uWaterCost = 1800;
function buyUnholyWater() {
  var purchased = confirm("Confirm Purchase for Vial of Unholy Water?");
  if (purchased == true) {
    if (balance >= uWaterCost) {
      $.ajax({
        url: "inventory.php",
        type: "POST",
        data: { id: 4, cost: uWaterCost },
        success: function (data) {
          uWaterInventory = data;
          document.getElementById("UWaterInventory").innerHTML = uWaterInventory;
        },
      });
    } else {
      alert("Not Enough Dante Coins To Purchase Vial of Unholy Water");
    }
  }
  else {
    alert("Cancelled")
  }
}

var goatShirtInventory = 0;
var goatShirtCost = 3600;
function buyGoatshirt() {
  var purchased = confirm("Confirm Purchase for Goat Shirt?");
  if (purchased == true) {
    if (balance >= goatShirtCost) {
      $.ajax({
        url: "inventory.php",
        type: "POST",
        data: { id: 5, cost: goatShirtCost },
        success: function (data) {
          goatShirtInventory = data;
          document.getElementById("GoatShirtInventory").innerHTML = goatShirtInventory;
        },
      });
    } else {
      alert("Not Enough Dante Coins To Purchase Goat Shirt");
    }
  }
  else {
    alert("Cancelled")
  }
}

var climbShirtInventory = 0;
var climbShirtCost = 3600;
function buyClimbShirt() {
  var purchased = confirm("Confirm Purchase for Ready To Climb Shirt?");

  if (purchased == true) {
    if (balance >= climbShirtCost) {
      $.ajax({
        url: "inventory.php",
        type: "POST",
        data: { id: 6, cost: climbShirtCost },
        success: function (data) {
          climbShirtInventory = data;
          document.getElementById("ClimbShirtInventory").innerHTML = climbShirtInventory;
        },
      });
    } else {
      alert("Not Enough Dante Coins To Purchase Ready to Climb Shirt");
    }
  }
  else {
    alert("Cancelled")
  }
}

var godShirtInventory = 0;
var godShirtCost = 3600;
function buyGodShirt() {
  var purchased = confirm("Confirm Purchase for I Love God Shirt?");

  if (purchased == true) {
    if (balance >= godShirtCost) {
      $.ajax({
        url: "inventory.php",
        type: "POST",
        data: { id: 7, cost: godShirtCost },
        success: function (data) {
          godShirtInventory = data;
          document.getElementById("GodShirtInventory").innerHTML = godShirtInventory;
        },
      });
    } else {
      alert("Not Enough Dante Coins To Purchase I Love God Shirt");
    }
  }
  else {
    alert("Cancelled")
  }
}

var hWaterInventory = 0;
var hWaterCost = 3600;
function buyHolyWater() {
  var purchased = confirm("Confirm Purchase for Vial of Holy Water?");

  if (purchased == true) {
    if (balance >= hWaterCost) {
      $.ajax({
        url: "inventory.php",
        type: "POST",
        data: { id: 8, cost: hWaterCost },
        success: function (data) {
          hWaterInventory = data;
          document.getElementById("HWaterInventory").innerHTML = hWaterInventory;
        },
      });
    } else {
      alert("Not Enough Dante Coins To Purchase Vial of Holy Water Shirt");
    }
  }
  else {
    alert("Cancelled")
  }
}

