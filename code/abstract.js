export default class Stone{
    constructor(game,position){
        this.game =game;
        this.position=position;
        this.width=60;
        this.height=20;
        this.radius=10;

    }
    update(){

    }
    draw(cotx){
        const colors=["#F8B195","#F67280","#C06C84","#6C5B7B"];
        cotx.fillStyle="#C06C84";
        cotx.fillRect(this.position.x,this.position.y, this.width,this.height);
        // cotx.beginPath();
        // cotx.fillStyle="blue";
        // cotx.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2);
        // cotx.fill();

    }
}