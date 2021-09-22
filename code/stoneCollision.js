export function stoneCollision(ballObject,gameObject){
        // check the ball and the slider position
        // for mapping collision with ball and slider 
        let bottomBallPosition = this.postion.y + this.radius;
        let topBallPosition = this.position.y;
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
            
}