import { Scene1, Scene2 } from './scene'

let phaserConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-display',
  width: 800,
  height: 600,
  scene: [Scene1, Scene2],
}

const game = new Phaser.Game(phaserConfig)

/*
own notes:
0:45 PM] jdotr: @YS so
[10:51 PM] jdotr: - when a scene is started it emits a start event with the scene as the payload object; you can possibly hook to this to reset any state if necessary

additionally, after a scene emits this it goes through a boot process. That looks like:
  - scene.init
  - reset the scene's sys.loader then call scene.preload (if there is a loader, I'm not sure about the cases where this would be empty)
  - calls scene.create(edited)
[10:53 PM] jdotr: so if you want something to get reset between calls to scene.start it sounds like you basically should be able to assign it a null value in your init or create method
[10:54 PM] jdotr: if you don't assign it a null value in one of those then it will have whatever the last value assigned by default (because you never changed it)
[10:54 PM] jdotr: so the pro-style approach to reseting your scene is going to be just making sure that your initialize everything at once in your create
[10:54 PM] jdotr: the cheap hack that is real easy will probably be to destry the scene and then re-add it
[10:54 PM] jdotr: which will start you with a fresh, newly constructed, scene
[10:55 PM] jdotr: and that will wipe away any state you might have been carrying around accidentally
[10:55 PM] jdotr: gldd :smile:
[10:57 PM] jdotr: (also, tl;dr: the behavior you're describing is not a bug)
[10:57 PM] jdotr: it's basically caching scene objects
*/