var playerName = window.prompt("Welcome to Robowars! \n What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;


// You can also log multiple values at once like this
console.log("Welcome to Robowars, " + playerName + "!");
console.log("See Starting Health:")
console.log(playerName + "\n" + "Attack: " + playerAttack + "\n" + "Health: " + playerHealth);
console.log(enemyName + "\n" + "Attack: " + enemyAttack + "\n" + "Health: " + enemyHealth);



  var fight = function() {
    
// Alert players that they are starting the round

    window.alert("Begin Round!");
    
// Get user input
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

// If playr chooses to fight, then fight!
    if (promptFight === "fight" || promptFight === "FIGHT") {

// remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth -playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

//check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

// remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

//check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

// if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm(playerName + ", are you sure you would like to skip the fight? This will cost money!");
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //supbtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }


    if (enemyHealth <= 0 && playerHealth > 0){
        console.log ("You Win!")
        };
    
    if (playerHealth <= 0 && enemyHealth >= 1){
        console.log ("You Lose!")
        };
    
    if (enemyHealth <= 0 && playerHealth <= 0){
        console.log ("Draw!")
        };

    console.log(playerName + "\n" + "Attack: " + playerAttack + "\n" + "Health: " + playerHealth);
    console.log(enemyName + "\n" + "Attack: " + enemyAttack + "\n" + "Health: " + enemyHealth); 
  }
  fight();

    
