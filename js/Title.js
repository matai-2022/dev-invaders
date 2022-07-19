export default class Title extends Phaser.Scene {
  constructor() {
    super({
      key: 'Title',
    })
  }

  preload() {
    this.load.image(
      'start-game',
      '../assets/minipixel/UI objects/START (48 x 8).png'
    )
  }

  create() {
    var text = this.add
      .text(900, 360, 'Dev Invaders', {
        fontSize: 50,
        color: '#000000',
        fontStyle: 'bold',
      })
      .setOrigin(0.5)

    const start = this.add
      .sprite(900, 430, 'start-game')
      .setScale(5)
      .setInteractive()

    start.on('pointerdown', () => this.scene.start('MainScene'))

    start.on('pointerover', () => start.setTint(0xff0000a160))
  }
}
