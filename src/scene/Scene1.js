class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: 'scene1' })
    console.log(`Scene1 ctor`)
  }

  init() {
    console.log(`[Scene1] init`)
    console.log(arguments)

    console.log(this)
    this.graphics = this.add.graphics(0, 0)
    this.graphics.fillStyle('0x0000ff')
    this.graphics.fillRect(0, 0, 800, 600)

    this.space = this.input.keyboard.addKey(KeyCodes.SPACE)
  }

  preload() {
    console.log('[Scene1] preload')
    console.log(arguments)
  }

  create() {
    console.log('[Scene1] create')
    console.log(arguments)
  }

  update() {
  }

  render() {
  }
}

/*
events emited?

    // bootQueue: function ()
    // processQueue: function ()
    add: function (key, sceneConfig, autoStart)
    remove: function (key)
    bootScene: function (scene)
    loadComplete: function (loader)
    payloadComplete: function (loader)
    update: function (time, delta)
    resize: function (width, height)
    render: function (renderer)
    create: function (scene)
    createSceneFromFunction: function (key, scene)
    createSceneFromInstance: function (key, newScene)
    createSceneFromObject: function (key, sceneConfig)
    getKey: function (key, sceneConfig)
    getScene: function (key)

    // checking scene state
    isActive: function (key)
    isVisible: function (key)
    isSleeping: function (key)

    // altering scene state
    pause: function (key)
    resume: function (key)
    sleep: function (key)
    wake: function (key)
    start: function (key, data)
    stop: function (key)
    switch: function (from, to)

    // ordering scene relative position
    bringToTop: function (key)
    sendToBack: function (key)
    moveDown: function (key)
    moveUp: function (key)
    moveAbove: function (keyA, keyB)
    moveBelow: function (keyA, keyB)
    swapPosition: function (keyA, keyB)

    getAt: function (index)
    getIndex: function (key)
    queueOp: function (op, keyA, keyB)
    dump: function ()
    destroy: function ()
*/

export default Scene1