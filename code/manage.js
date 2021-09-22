import Slider from './slider.js';
import InputHandler from './controler.js';
import Ball from './ball.js';
import Stone from './abstract.js';
import { makeLevel, levelOne } from './level.js';


export default class Game{
    constructor(gameScreenWidth,gameScreenHeight){

        this.gameWidth = gameScreenWidth;
        this.gameHeight= gameScreenHeight;
    }
   
    
    start(){

        //create a all  object from slider.js
        //and pass the game object
        this.sliderObject= new Slider(this);
        this.controler = new InputHandler(this.sliderObject);
        this.ballObject = new Ball(this);
        let stone = makeLevel(this,levelOne);
        
        // for (let i =0;i<10; i++){
        //     // we need a lot of bricks
        //     //so, every single object create like that
        //     // this.brickObject =new Brick(this, {x: position, y: position});
        //     // and push it bricks array
        //     stone.push(new Stone(this, {x: i*20+10, y: 30}));
        // }


        // create a object array
        // stone object added using javascript Spread syntax(...stone)
        this.gameObject =[this.sliderObject, this.ballObject,...stone];
        this.lenGameObject = this.gameObject.length;// find the array length for looping condition
        
    }        


    update(deltaTime){
        // this.sliderObject.update(deltaTime);
        // this.ballObject.update(deltaTime);

        //upadte all object from array
        for(let i=0; i<this.lenGameObject;i++){
            this.gameObject[i].update(deltaTime);
        }
       
        
    }


    draw(cotx){
        // this.sliderObject.draw(cotx);
        // this.ballObject.draw(cotx);
        //draw all object from array
        for(let i=0; i<this.lenGameObject;i++){
            this.gameObject[i].draw(cotx);
        }
    }
   

    
}