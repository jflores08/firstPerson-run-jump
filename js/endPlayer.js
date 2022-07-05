class Player {
	
    constructor() {
        this.gravity = 0.2;
        this.velocity = 0;
        this.width = 100;
        this.height = 140;
        this.x = 450;
        this.y = height - this.height;
        this.health = 100
        this.portalGunCharge = 0
        this.inAirValue;
    }



    draw(endGame) {

        if (endGame){
            this.y--;
            image(game.playerImage, 450, this.y, this.width, this.height);
        } else {
        // console.log('drawing the player 🙃')
        // this pushes the player down
        this.velocity += this.gravity;
        this.y += this.velocity;
        // if the bb8 moves lower than the ground
        if (this.y >= height - this.height) {
            // then he should be set to it's starting position
            this.y = height - this.height;
        }
        // if the bb8 moves too far Left
        if (this.x <= 0 + (this.width * 2.5)) {
            this.x = (this.width * 2.5);
        }
        // if the bb8 moves too far Right
        if (this.x >= width - (this.width * 3.5)) {
            this.x = (width - (this.width * 3.5));
        }
        image(game.playerImage, this.x, this.y, this.width, this.height);
        
        this.inAir();
        }
    }
    
    inAir(){
        if (this.y < height - this.height){
            this.inAirValue = true
        }else{
            this.inAirValue = false
        }
    }


    jump() {
        console.log('jump', this.velocity);
        this.velocity = - 12;
    }
    collision(playerInfo) {
        // console.log('collision', playerInfo);
        // get the middle of the obstacle 
        let targetX = this.x + this.width / 2;
        let targetY = this.y + this.height / 2;
        // get the middle of the player
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;

        
    // https://p5js.org/reference/#/p5/dist
        // dist(x1, y1, x2, y2);
        let bottomPlayer = (playerInfo.y + playerInfo.height) 
        let targetHitZoneTop = (height - this.height)
        let targetJumped = (height - (this.height/2))
        if ((dist(targetX, targetY, playerX, playerY) < 800) && (bottomPlayer > targetHitZoneTop) && (this.y > targetHitZoneTop)) {
             // here we have a collision
             game.player.portalGunCharge += 10;
             console.log("Target Aquried!!");
             return true;
            
        } else {
            return false
        }
    }

}