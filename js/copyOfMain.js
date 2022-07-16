var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 800,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    init: initScene,
    preload: preload,
    create: create,
    update: updateScene,
  },
}
var game = new Phaser.Game(config)

var cloudsWhite,
  cloudsWhiteSmall,
  sky,
  platforms,
  movingPlatform,
  movingPlatform1

function initScene() {}

function preload() {
  this.load.image('sky', 'assets/minipixel/SpaceBG.png')

  this.load.image('clouds-white', 'assets/minipixel/clouds-white.png')
  this.load.image(
    'clouds-white-small',
    'assets/minipixel/clouds-white-small.png'
  )
  this.load.image('ground', 'assets/minipixel/platform.png')
}

function create() {
  sky = this.add.tileSprite(
    800, // scene x + y
    200,
    2400, //
    1400,
    'sky'
  )

  cloudsWhite = this.add.tileSprite(800, 200, 2400, 400, 'clouds-white')
  cloudsWhiteSmall = this.add.tileSprite(
    640, // scene x + y
    200,
    2400, //
    400,
    'clouds-white-small'
  )

  // movingPlatform = this.add.tileSprite(800, 800, 100, 400, 'ground')
  movingPlatform = this.physics.add.image(400, 650, 'ground')

  // movingPlatform = this.physics.add.image(600, 750, 'ground')
  movingPlatform.setImmovable(true)
  movingPlatform.body.allowGravity = false
  movingPlatform.setVelocityX(-50)

  movingPlatform1 = this.physics.add.image(500, 750, 'ground')
  movingPlatform1.setImmovable(true)
  movingPlatform1.body.allowGravity = false
  movingPlatform1.setVelocityX(-50)
}

function updateScene() {
  cloudsWhite.tilePositionX += 0.5
  cloudsWhiteSmall.tilePositionX += 0.25
  sky.tilePositionX += 0.25
  // movingPlatform.tilePositionX += 0.5
}