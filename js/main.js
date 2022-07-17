import MainScene from './MainScene.js'

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 800,
  backgroundColor: '#333333',
  parent: 'dev-invaders',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 330 },
      debug: false,
    },
  },
  scene: [MainScene],
}

const game = new Phaser.Game(config)
