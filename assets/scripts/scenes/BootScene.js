class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }
    preload() {
        this.load.image('bg', 'assets/sprites/background.png');
        this.load.image('bg2', 'assets/sprites/main_file.png');
    }
    create() {
        this.scene.start('Preload');
    }
}
