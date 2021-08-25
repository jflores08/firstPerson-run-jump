class Player {

	constructor() {
		this.gravity = 0.9;
		this.velocity = 0;
		this.width = 100;
		this.height = 140;
		this.x = 250;
		this.y = height - this.height;
        this.health = 100
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
		image(game.playerImage, this.x, this.y, this.width, this.height);

	}
    

	jump() {
		console.log('jump', this.velocity);
		this.velocity = - 30;
	}
}