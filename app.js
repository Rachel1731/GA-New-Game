const buttons = document.querySelectorAll('.characters');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);
    });
  });

  const character1 = document.querySelectorAll('Branch');
  button.addEventListener('click', (event) => {
    console.log(event.target.innerText);
  });

  const character2 = document.querySelectorAll('Tree Guy');
  button.addEventListener('click', (event) => {
    console.log(event.target.innerText);
  });

  const character3 = document.querySelectorAll('Stickinator');
  button.addEventListener('click', (event) => {
    console.log(event.target.innerText);
  });

  const character4 = document.querySelectorAll('Final Boss');
  button.addEventListener('click', (event) => {
    console.log(event.target.innerText);
  });


  const game = {

    party: [Branch, TreeGuy, Stickinator, FinalBoss],

  };

  const inventory = {


    weaponsList: 

        Sticks = {
            level: 0,
            property: 'Sticks',
            damage: 5,
        },

            Wood = {
                level: 1,
                property: 'Wood',
                damage: 10,
            },
    
                Log = {
                    level: 2,
                    property: 'Log',
                    damage: 15,
                },

                Wind = {
                level: 3,
                    property: 'Wind',
                    damage: 20,
                },

                Water = {
                level: 4
                    property: 'Water',
                    damage: 25,

                },

                EvilTree = {
                level: 5,
                property: 'Evil Tree',
                damage: 30,

                },

                FinalBoss = {
                level: 6,
                property: 'Final Boss Weapon',
                damage: 500,

                },


                // if (moveLeft && playerX > 0) playerX = playerSpeed;
    // if (moveRight && playerX <- playerWidth) playerX += playerSpeed;

    //if (
        //enemy.finalBoss < playerX + playerWidth &&
       // enemy.finalBoss + enemyWidth > playerX &&
        //enemy.stickinator < playerY + playerHeight &&
       // enemy.stickinator + enemyHeight > playerY
    //) {
        //gameOver = true;
    //}

    if (
        
        enemy.finalBoss < playerX + playerWidth &&
        enemy.finalBoss + enemyWidth > playerX &&
        //enemy.stickinator < playerY + playerHeight &&
        //enemy.stickinator + enemyHeight > playerY
    ) {
        gameOver = true;
    }

document.title = `Score: ${score}`;

let pointsScored = 1000
let highScore = 100

let x = 100;
x = 50; 
const z = 25;
z = 500; // high score


    const level = document.querySelectorAll('level 1');
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);
    });
  
    const nextLevel = document.querySelectorAll('level 2');
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);
    });
  
    const nextLevel = document.querySelectorAll('level 3');
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);
    });
  
    const nextLevel = document.querySelectorAll('level 4');
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);

      const nextLevel = document.querySelectorAll('level 5');
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);

      const finalLevel = document.querySelectorAll('level 6');
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);

    });


    const Level1
let Branch
function takeDamage(){
    player.health -= 1;
    player.damage += 1;
    player.points -= 100;


    const Level2
let TreeGuy
function takeDamage(){
    player.health -= 1;
    player.damage += 1;
    player.points -= 100;


const Level3
let Stickinator
function takeDamage(){
    player.health -= 1;
    player.damage += 1;
    player.points -= 100;


    const Level4
let TreeGuy
function takeDamage(){
    player.health -= 1;
    player.damage += 10;
    player.points -= 15;


    const Level5
let Branch
function takeDamage(){
    player.health === 150;
    player.damage += 15;
    player.points -= 1000;


    const Level6
let finalBoss
function takeDamage(){
    player.health -= 100;
    player.damage += 16;
    player.points -= 1500;


function gameLoop() {}
    if (!gameOver) {
        update();
        console.log(gameLoop);
    }