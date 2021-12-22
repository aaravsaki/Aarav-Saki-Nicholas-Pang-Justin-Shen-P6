<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark  ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#"
                ><img
                  src="../Merch Images/theatermasks.jpg"
                  width="50"
                  height="50"
                />
              </a>
            </li>

            <li style="margin-top: 15px" class="nav-item">
              <a class="nav-link active" href="inferno.php">Inferno</a>
            </li>

            <li style="margin-top: 15px" class="nav-item">
              <a class="nav-link active" href="purgatorio.php">Purgatorio</a>
            </li>

            <li style="margin-top: 15px" class="nav-item">
              <a class="nav-link active" href="paradiso.php">Paradiso</a>
            </li>

            <li style="margin-top: 15px" class="nav-item">
              <a class="nav-link active" href="store.php">Merchandise</a>
            </li>

            <?php
            session_start();
            // If logged in, show balance and logout on navbar
            if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
              echo "
              <li style=\"margin-top: 15px\" class=\"nav-item\">
                <a class=\"nav-link active\" href=\"logout.php\">Log Out</a>
              </li>
              <li class=\"nav-item\" style=\"margin-top: 15px\"> <a class=\"nav-link disabled\"> Currently logged in as: " . $_SESSION["username"] . " </a> </li>
              <div style= \"text-align: right\">   
              <li style=\"margin-top: 15px\" class=\"nav-item\">
              <a class=\"nav-link active\"> Dante Coins: <span id = \"balance\">0</span></a>
            </li>  
            </div>
              ";
            }
            else{
              echo "
              <li style=\"margin-top: 15px\" class=\"nav-item\">
                <a class=\"nav-link active\" href=\"register.php\">Register</a>
              </li>
              <li style=\"margin-top: 15px\" class=\"nav-item\">
                <a class=\"nav-link active\" href=\"login.php\">Log In</a>
              </li>
              ";
            }
            ?>       

            </ul>
        </div>
      </div>
    </nav>
    