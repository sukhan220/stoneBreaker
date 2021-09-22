export default class Ball{
    constructor(game){
        this.gameWidth= game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game= game;// Declare properties of game object 
        this.radius = 16;
        this.postion={
            x: this.gameWidth/2,
            y: this.gameHeight/2
        }
        this.speed={
            x: 2,
            y: 2
        }

    }
    draw(cotx){
        cotx.beginPath();
        cotx.fillStyle="red";
        cotx.arc(this.postion.x,this.postion.y,this.radius,0,Math.PI*2);
        cotx.fill();
        
        
    }
    update(deltaTime){
       

        if(this.postion.x+ this.radius > this.gameWidth || this.postion.x-this.radius < 0)
            this.speed.x = - this.speed.x;
        
        if (this.postion.y+this.radius> this.gameHeight || this.postion.y - this.radius< 0)
            this.speed.y = -this.speed.y;

        // check the ball and the slider position
        // for mapping collision with ball and slider 
        let bottomBallPosition = this.postion.y + this.radius;
        let topSliderPosition = this.game.sliderObject.position.y;
        // left position x  is slider x postion
        let leftSliderPosition = this.game.sliderObject.position.x;
        //but slider right position is x + slider width
        let rightSliderPosition = this.game.sliderObject.position.x+this.game.sliderObject.width;
    

        // check collision with ball and slider
        // if both postion are same
        // or slider left position is x
        // AND slider right position is x+ width
        // AND slider top position is slider y position
        // or ball y postion + ball radius  same means collision
        // then ball speed will be reversed or negative direction
        if(bottomBallPosition >= topSliderPosition && this.postion.x >= leftSliderPosition && this.postion.x+this.radius <= rightSliderPosition )
        {
            this.speed.y = - this.speed.y;
            // set touch the slider
            this.postion.y= this.game.sliderObject.position.y-this.radius;
          
        
        }
            

        this.postion.x +=this.speed.x;
        this.postion.y +=this.speed.y;

        




    }
}