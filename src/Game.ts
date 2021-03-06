import "phaser";
import { Preloader } from './scenes/Preloader';
import { Main } from './scenes/Main';
    
const config: GameConfig = {
    type: Phaser.AUTO,
    parent: "canvas",    
    width: 960,
    height: 540,
    scaleMode: Phaser.ScaleModes.LINEAR,    
    physics: {
        default: 'arcade', 
        arcade: {
            fps: 60,
            gravity: { y: 0 },
            debug:false
        }        
    },
    scene: [
        Preloader,
        Main
    ]
};

const game = new Phaser.Game(config);