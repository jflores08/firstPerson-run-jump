class Portal {

    constructor (image, player){

        this.image = image;
        this.x = 465
        this.y = 280
        this.width = 50
        this.hieght = 50
        // player.x = 465
        // player.y = 480
        // player.width = 100
        // player.height = 140
    }

    draw(){
        image(game.portalImage, this.x, this.y, this.width, this.hieght);
        image(game.playerImage, 465, 480, 100, 140);
        this.playerGameEnd && (this.player.draw());
    }

    collision(playerInfo ) {
		// console.log('collision', playerInfo);
		// get the middle of the obstacle 
		let portalX = this.x + this.width / 2;
		let portalY = this.y + this.height / 2;
		// get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2;
		let playerY = playerInfo.y + playerInfo.height / 2;

		
	// https://p5js.org/reference/#/p5/dist
		// dist(x1, y1, x2, y2);
        let bottomPlayer = (playerInfo.y + playerInfo.height) 
        let portalHitZoneTop = (height - this.height)
        // let targetJumped = (height - (this.height/2))
		if (dist(portalX, portalY, playerX, playerY) < 60) {
			 // here we have a collision
            //  game.player.portalGunCharge += 10;
            
             console.log('BB8 enters the portal');
             return true;
            
		} else {
            return false
		}
	}

    if (collision){
        this.playerGameEnd = false;
    }

}