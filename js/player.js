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

	draw() {
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
}