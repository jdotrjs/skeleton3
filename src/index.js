let game = null

let phaserConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-display',
  width: 800,
  height: 600,
  scene: {
    preload: () => {},
    create: () => {},
  },
}

window.onload = () => {
  game = new Phaser.Game(phaserConfig)
}
