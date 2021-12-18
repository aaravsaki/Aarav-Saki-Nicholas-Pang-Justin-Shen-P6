<!DOCTYPE html>
<html lang="en">
   <head>
   <style>
    /* width */
    ::-webkit-scrollbar {
      width: 15px;
      background: #4C4C4C  ;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #BBBBBB ;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #D2D2D2 ;
      border-radius: 10px;
    }
</style>
      <meta charset="UTF-8">
      <title>The Greatest Store</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
   
      <link rel="stylesheet" href="../css/bootstrap.min.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
      
      />
      <link type="text/css" rel="stylesheet" href="../css/style.css">
      <?php
      include_once "template.php";
      ?>
      <script src="../js/jquery-3.6.0.js"></script>
      <script type="text/javascript" src="../js/Background.js"></script>

      <script>

      </script>

   </head>
   <body onload="refreshInventory()">
      <div class="page-content-product">
         <div class="main-product">
            <div class="container">
               <div class="row clearfix">
                  <div class="find-box">
                     <h1>The Finest Wares From<br>The Biblical World.</h1>
                     <h4>Unique Products You Cannot Find Anywhere Else.</h4>
                     <div class="product-sh">
                        <div class="col-sm-6">
                        </div>
                        <div class="col-sm-3">
                           <div class="form-sh">
                              </select>
                           </div>
                        </div>  
                  </div>
               </div>
               <div class="row clearfix">
                  <div class="col-lg-3 col-sm-6 col-md-3">
                        <div class="box-img" onclick="buyMug()">
                           <h4>Mug De Scientia <br/> (1800 Denarios) <br/> Inventory: <span id = "MugInventory">0</span> </h4>
                           <img src="https://github.com/nintob/Aarav-Saki-Nicholas-Pang-Justin-Shen-P6/blob/main/Merch%20Images/Skull%20Mug.jpg?raw=true" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                        <div class="box-img" onclick="buyPoster()">
                           <h4>Septem Solaria Pallio <br/> (1800 Denarios) <br/> Inventory: <span id = "PosterInventory">0</span></h4>
                           <img src="https://github.com/nintob/Aarav-Saki-Nicholas-Pang-Justin-Shen-P6/blob/main/Merch%20Images/Moutain%20Poster.jpg?raw=true" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                        <div class="box-img" onclick="buyHeavenBear()">
                           <h4>Caelum Ursum <br/> (1800 Denarios) <br/> Inventory: <span id = "BearInventory">0</span></h4>
                           <img src="https://github.com/nintob/Aarav-Saki-Nicholas-Pang-Justin-Shen-P6/blob/main/Merch%20Images/Heaven%20Bear.jpg?raw=true" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                        <div class="box-img" onclick="buyUnholyWater()">
                           <h4>Aqua Profanus <br/> (1800 Denarios) <br/> Inventory: <span id = "UWaterInventory">0</span></h4>
                           <img src="https://github.com/nintob/Aarav-Saki-Nicholas-Pang-Justin-Shen-P6/blob/main/Merch%20Images/Unholy%20Water.jpg?raw=true" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                        <div class="box-img" onclick="buyGoatshirt()">
                           <h4>Tunic Caprae <br/> (3500 Denarios) <br/> Inventory: <span id = "GoatShirtInventory">0</span></h4>
                           <img src="https://github.com/nintob/Aarav-Saki-Nicholas-Pang-Justin-Shen-P6/blob/main/Merch%20Images/Goat%20Shirt.jpg?raw=true" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                        <div class="box-img" onclick="buyClimbShirt()">
                           <h4>Scandere Tunicam <br/> (3500 Denarios) <br/> Inventory: <span id = "ClimbShirtInventory">0</span></h4>
                           <img src="https://github.com/nintob/Aarav-Saki-Nicholas-Pang-Justin-Shen-P6/blob/main/Merch%20Images/Climb%20Shirt.jpg?raw=true" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                        <div class="box-img" onclick="buyGodShirt()">
                           <h4>Deus Tunicam Amo <br/> (3500 Denarios) <br/> Inventory: <span id = "GodShirtInventory">0</span></h4>
                           <img src="https://github.com/nintob/Aarav-Saki-Nicholas-Pang-Justin-Shen-P6/blob/main/Merch%20Images/God%20Shirt.jpg?raw=true" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">                     
                        <div class="box-img" onclick="buyHolyWater()">
                           <h4>Aqua Sanctae <br/> (3500 Denarios) <br/> Inventory: <span id = "HWaterInventory">0</span></h4>
                           <img src="https://github.com/nintob/Aarav-Saki-Nicholas-Pang-Justin-Shen-P6/blob/main/Merch%20Images/Holy%20Water.jpg?raw=true" alt="" />
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
   </body>
</html>