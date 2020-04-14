import { config } from '../config/preload';

export class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'preloader'            
        });
    }

    preload() {

        // cargar los sprites
        this.loadHojasDeSprites();

    }

    create() {
        this.scene.start('main');
    }

    loadHojasDeSprites() {
        
        //destructuramos el objeto config
        const { rutaBaseDeHojasDeSprites, nombresBaseDeHojasDeSprite } = config;

        //se asigna un path general
        this.load.setPath(rutaBaseDeHojasDeSprites);

        //se cargan todas las hojas de sprites del path asignado anteriormente
        for (let i = 0; i < nombresBaseDeHojasDeSprite.length; i++) {
            this.load.atlas(nombresBaseDeHojasDeSprite[i], `${nombresBaseDeHojasDeSprite[i]}.png`, `${nombresBaseDeHojasDeSprite[i]}.json`);
        }
    }

}