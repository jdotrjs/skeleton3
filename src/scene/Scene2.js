class Scene2 extends Phaser.Scene {
  constructor() {
    super({ key: 'scene2' })    
  }

  init() {
    console.log(`[Scene2] init`)
    console.log(arguments)
  }

  preload() {
    console.log('[Scene2] preload')
    console.log(arguments)
  }

  create() {
    console.log('[Scene2] create')
    console.log(arguments)
  }

  update() {
  }

  render() {
  }
}

export default Scene2