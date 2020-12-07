let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [BootScene, PreloadScene, GameScene, StartScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },
};

let game = new Phaser.Game(config);
