var config = {
  type: Phaser.AUTO,
  width: 1980,
  height: 800,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
}
var game = new Phaser.Game(config)

function preload() {
  this.load.setBaseURL('https://labs.phaser.io')

  this.load.image('sky', 'assets/skies/space3.png')
  this.load.image('logo', 'assets/sprites/phaser3-logo.png')
  this.load.image('red', 'assets/particles/red.png')
}

function create() {}
