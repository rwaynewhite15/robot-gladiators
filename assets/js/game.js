var playerName = window.confirm("Welcome to Robowars! \n What is your robot's name?");
if (playerName == true){playerName = "Bobby"}
else{
    playerName = "Madi"
}
var playerHealth = 100;
var playerAttack = 20;
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
let round = 1;

// You can also log multiple values at once like this
console.log("Welcome to Robowars, " + playerName + "!");
console.log("See Starting Health:")
console.log(playerName + "\n" + "Attack: " + playerAttack + "\n" + "Health: " + playerHealth);
console.log(enemyName + "\n" + "Attack: " + enemyAttack + "\n" + "Health: " + enemyHealth);



  var fight = function() {


    round++;

    // Alert players that they are starting the round
    window.alert("Begin Round One!");

    // compute new values after fight
    enemyHealth = enemyHealth -playerAttack;
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message after attacking
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    window.alert(
        playerName + " caused " + playerAttack + " damage to " + enemyName + ".\n" + enemyName + " now has " + enemyHealth + " health remaining.");
    
        

    // Log a resulting message after being attacked
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    window.alert(
        enemyName + " caused " + enemyAttack + " damage to " + playerName + ".\n" + playerName + " now has " + playerHealth + " health remaining.");
    }

    fight();

    console.log("See Health after Round " + (round - 1) + ":");
    console.log(playerName + "\n" + "Attack: " + playerAttack + "\n" + "Health: " + playerHealth);
    console.log(enemyName + "\n" + "Attack: " + enemyAttack + "\n" + "Health: " + enemyHealth);

     //check player health
    if (playerHealth > 0) {
        console.log("Your player is still alive!");
      }
      else {
        console.log("You have Died. Game Over!");
      }

    //check enemy health
    if (enemyHealth <= 0) {
        console.log(enemyName + " has died!");
        } 
        else {
        console.log(enemyName + "is still alive!");
        }

    if (enemyHealth >= 1 && playerHealth >= 1) {
        var nextRound = round
    window.alert("Get ready for round " + nextRound + "!")
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

    

    