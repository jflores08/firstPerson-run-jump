class Portal {

    constructor (image, player){

        this.image = image;
        this.x = 350
        this.y = 250
        this.width = 250
        this.hieght = 250
        this.pX = 460
        this.pY = 480
        this.pWidth = 100
        this.pHeight = 140
        this.playerGameEnd = true
    }



    draw(){
        
        image(game.portalImage, this.x, this.y, this.width, this.hieght);
        this.pY--;
        // this.playerGameEnd && image(game.playerImage, this.pX, this.pY, this.pWidth, this. pHeight);
        
        
        // this.playerGameEnd && (this.player.draw());
    }
    

    // collision(playerInfo) {
	// 	// console.log('collision', playerInfo);
	// 	// get the middle of the obstacle 
	// 	let portalX = this.x + this.width / 2;
	// 	let portalY = this.y + this.height / 2;
	// 	// get the middle of the player
	// 	let playerX = playerInfo.x + playerInfo.width / 2;
	// 	let playerY = playerInfo.y + playerInfo.height / 2;

		
	// // https://p5js.org/reference/#/p5/dist
	// 	// dist(x1, y1, x2, y2);
    //     let bottomPlayer = (playerInfo.y + playerInfo.height) 
    //     let portalHitZoneTop = (height - this.height)
    //     // let targetJumped = (height - (this.height/2))
	// 	if ((dist(portalX, portalY, playerX, playerY) < 60) && (bottomPlayer > portalHitZoneTop) && (this.y > portalHitZoneTop)) {
	// 		 // here we have a collision
            
    //          console.log('BB8 enters the portal');
    //          return true;
            
	// 	} else {
    //         return  false;
	// 	}
	// }

    // if (collision){
    //     this.playerGameEnd = false;
    // }

}

    