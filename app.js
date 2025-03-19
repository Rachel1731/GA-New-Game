document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.Tutorial_Start');
  const tutorial = document.getElementById('Tutorial');
  const levelSelection = document.getElementById('Level_Selection');
  const mainGame = document.querySelector('.main');
  const gameOverScreen = document.querySelector('.game-over');
  const winScreen = document.querySelector('.win');

  if (!startButton) {
      console.error('Start button not found!');
      return;
  }

  startButton.addEventListener('click', () => {
      console.log('Start button clicked');
      tutorial.classList.add('hidden');
      levelSelection.classList.remove('hidden');
  });

  const levels = document.querySelectorAll('.Level_Selection_Level');
  levels.forEach(level => {
      level.addEventListener('click', () => {
          console.log(`Level ${level.id} selected`);
          levelSelection.classList.add('hidden');
          mainGame.classList.remove('hidden');
      });
  });

  const characters = {
      character1: document.querySelector('.Branch'),
      character2: document.querySelector('.TreeGuy'),
      character3: document.querySelector('.Stickinator'),
      character4: document.querySelector('.FinalBoss')
  };

  const game = {
      party: ['Branch', 'TreeGuy', 'Stickinator', 'FinalBoss']
  };

  const inventory = {
      weaponsList: {
          Sticks: { level: 0, property: 'Sticks', damage: 5 },
          Wood: { level: 1, property: 'Wood', damage: 10 },
          Log: { level: 2, property: 'Log', damage: 15 },
          Wind: { level: 3, property: 'Wind', damage: 20 },
          Water: { level: 4, property: 'Water', damage: 25 },
          EvilTree: { level: 5, property: 'Evil Tree', damage: 30 },
          FinalBossWeapon: { level: 6, property: 'Final Boss Weapon', damage: 500 }
      }
  };

  let player = { health: 100, damage: 1, points: 0, weapon: inventory.weaponsList.Sticks };
  let enemy = { health: 100, damage: 25 };
  let gameOver = false;

  function takeDamage(target, damage) {
      target.health -= damage;
      if (target.health <= 0) {
          target.health = 0;
          gameOver = true;
          if (target === player) {
              console.log('You Lose!');
              showGameOverMessage();
          } else {
              console.log('You Win!');
              showWinMessage();
          }
      }
  }

  function showGameOverMessage() {
      gameOverScreen.classList.remove('hidden');
      mainGame.classList.add('hidden');
      document.querySelector('.game-over-message').textContent = 'You Lose! 😢';
      setTimeout(() => {
          location.reload();
      }, 3000);
  }

  function showWinMessage() {
      winScreen.classList.remove('hidden');
      mainGame.classList.add('hidden');
      document.querySelector('.win-message').textContent = 'You Win! 🎉';
      setTimeout(() => {
          winScreen.classList.add('hidden');
          levelSelection.classList.remove('hidden');
          enemy.health = 100;
      }, 3000);
  }

  setInterval(() => {
      if (!gameOver) {
          console.log('Enemy attacks!');
          takeDamage(player, enemy.damage);
          console.log('Player Health:', player.health);
          updateHealthDisplay();
      }
  }, 30000);

  document.querySelector('.sword').addEventListener('click', () => {
      if (!gameOver) {
          takeDamage(enemy, player.damage);
          console.log('Enemy Health:', enemy.health);
          updateHealthDisplay();
      }
  });

  document.querySelector('.shield').addEventListener('click', () => {
      console.log('Defend Activated!');
  });

  document.querySelector('.magic').addEventListener('click', () => {
      if (!gameOver) {
          takeDamage(enemy, player.damage * 2);
          console.log('Power Attack! Enemy Health:', enemy.health);
          updateHealthDisplay();
      }
  });

  function pickUpWeapon(weaponName) {
      if (inventory.weaponsList[weaponName]) {
          player.weapon = inventory.weaponsList[weaponName];
          console.log(`Picked up ${weaponName}, Damage: ${player.weapon.damage}`);
      } else {
          console.log('Weapon not found!');
      }
  }

  document.querySelectorAll('.weapon-item').forEach(weapon => {
      weapon.addEventListener('click', () => {
          pickUpWeapon(weapon.dataset.weapon);
      });
  });

  document.addEventListener('keydown', (event) => {
      if (event.key === 'a' || event.key === 'A') {
          if (!gameOver) {
              takeDamage(enemy, player.damage);
              console.log('Attacked enemy! Enemy Health:', enemy.health);
              updateHealthDisplay();
          }
      }
  });

  function updateHealthDisplay() {
      document.querySelector('.player-health').textContent = `Player Health: ${player.health}`;
      document.querySelector('.enemy-health').textContent = `Enemy Health: ${enemy.health}`;
  }

  function gameLoop() {
      if (!gameOver) {
          console.log('Game is running');
      }
  }

  setInterval(gameLoop, 1000);

  winScreen.addEventListener('click', () => {
      winScreen.classList.add('hidden');
      levelSelection.classList.remove('hidden');
  });

  gameOverScreen.addEventListener('click', () => {
      gameOverScreen.classList.add('hidden');
      levelSelection.classList.remove('hidden');
  });
});

