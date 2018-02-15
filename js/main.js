var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 200 }
    //     }
    // },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var controls;

function preload() {
    this.load.setBaseURL('http://labs.phaser.io/assets/');

    this.load.image('background', 'pics/robota-uxo-by-made-of-bomb.jpg');
    this.load.image('logo', 'sprites/phaser3-logo.png');
    this.load.image('red', 'particles/red.png');
    this.load.spritesheet('char', 'games/pacman/sprites32.png',  { frameWidth: 32, frameHeight: 32 });
}

function create() {
    this.add.image(1260, 750, 'background');
    var character = this.add.image(32, 32, 'char').setOrigin(0);

    // var particles = this.add.particles('red');
    //
    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    //var logo = this.physics.add.image(400, 100, 'logo');

    var controlConfig = {
        camera: this.cameras.main,
        left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        speed: 0.5
        // acceleration: 0.06,
        // drag: 0.0005,
        // maxSpeed: 1.0
    };
    controls = new Phaser.Cameras.Controls.Fixed(controlConfig);

    // logo.setVelocity(100, 20);
    // logo.setCollideWorldBounds(true);
    //
    // emitter.startFollow(logo);
    this.input.keyboard.on('keydown_D', function (event) {
        console.log('test');
    });
}

function update(time, delta) {
    controls.update(delta);

}
