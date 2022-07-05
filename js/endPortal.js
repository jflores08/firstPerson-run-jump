class EndPortal {
	constructor( targetSpeed) {
		
		this.y = 300;
		// this.x = (Math.random() * height) / 2.5;
        this.x = 430;
		this.width = 100;
		this.height = 100;
		this.Rand = Math.random()
		this.Rand2 = Math.random()
		this.Rand3 = Math.random()
		this.sign = true
		this.targetSpeed = targetSpeed
	}

    draw() {
		if(this.Rand3 > 0.5){
			this.sign = true
		}else{
			this.sign = false
		}
		// console.log(this.sign)
        this.y++/this.targetSpeed;
		if (this.sign){
        	this.x-= (this.Rand + this.Rand2);
		}else{
			this.x-= (this.Rand - this.Rand2);
		}
        // this.width++/3;
        // this.height++/3;
		image(game.portalImage, 480, 300, (this.width/1.5), (this.height/1.5));
        
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
		if ((dist(targetX, targetY, playerX, playerY) < 60) && (bottomPlayer > targetHitZoneTop) && (this.y > targetHitZoneTop)) {
			 // here we have a collision
             game.player.portalGunCharge += 10;
             console.log("Target Aquried!!");
             return true;
            
		} else {
            return false
		}
	}
}
