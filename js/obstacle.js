class Obstacle {
	constructor(image) {
		this.image = image;
		this.y = 300;
		// this.x = (Math.random() * height) / 2.5;
        this.x = 490;
		this.width = 20;
		this.height = 20;
		this.Rand = Math.random()
		this.shellSpeed = 0.001
	}
    
    draw() {
		
        this.y++/this.shellSpeed;
        this.x-= this.Rand;
        this.width++/2;
        this.height++/2;
		image(this.image, this.x, this.y, (this.width/1.5), (this.height/1.5));
        
	}
    positionSwitch(){
        let obstacleJumped = (height - (this.height/2))
        if (this.obstacle.y > obstacleJumped){
            return true
        }else{
            return false
        }


    }
	collision(playerInfo) {
		// console.log('collision', playerInfo);
		// get the middle of the obstacle 
		let obstacleX = this.x + this.width / 2;
		let obstacleY = this.y + this.height / 2;
		// get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2;
		let playerY = playerInfo.y + playerInfo.height / 2;

		
	// https://p5js.org/reference/#/p5/dist
		// dist(x1, y1, x2, y2);
        let bottomPlayer = (playerInfo.y + playerInfo.height) 
        let obstacleHeight = (height - this.height)
        let obstacleJumped = (height - (this.height/2))
		if ((dist(obstacleX, obstacleY, playerX, playerY) < 35) && (bottomPlayer > obstacleHeight) && (this.y > obstacleHeight)) {
			 // here we have a collision
             game.player.health -= 10;
             console.log(game.player.health);
             return true;
            
		} else {
            return false
		}
	}
}

