let app = new PIXI.Application({ width: 640, height: 360, resizeTo: window, transparent: true });

const ninja = {};

PIXI.settings.RESOLUTION = window.devicePixelRatio;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

document.body.appendChild(app.view);

PIXI.Loader.shared.add('ninja', 'assets/spritesheets/ninja.json').load(setup)

function setup() {
    let sheet = PIXI.Loader.shared.resources.ninja.spritesheet;

    ninja.idle = new PIXI.AnimatedSprite(sheet.animations['idle']);
    ninja.idle.anchor.set(0.5, 1)
    ninja.idle.x = app.renderer.width/4
    ninja.idle.y = app.renderer.height
    ninja.idle.scale.set(3)
    ninja.idle.animationSpeed = 0.1;
    ninja.idle.play()

    app.stage.addChild(ninja.idle);
}

window.onresize = () => {
    ninja.idle.x = app.renderer.width/4
    ninja.idle.y = app.renderer.height
}


const images = document.querySelectorAll('img');
for (let image of images) {
    image.addEventListener("load", function() {
        this.parentNode.style.opacity = '1';
    });
}