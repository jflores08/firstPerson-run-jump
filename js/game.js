class Game {

	constructor() {
		// this.background = new Background();
		// this.player = new Player();
		this.backgroundImages = null;
		this.playerImage = null;
		this.obstacles = [];
	}

	setup() {
		this.background = new Background();
		this.player = new Player();
	}

	preloadGame() {
		this.backgroundImages = loadImage('assets/Perpetual-Hallway.gif');
		this.playerImage = loadImage('assets/player/bb8.gif');
		this.coinImage = loadImage(' assets/coins/tile000.png');
        this.shellImage = loadImage('assets/shells/8bit-red-shell.png');
	}

	draw() {
		// here all the objects are drawn that the game needs
		clear();
		// this draws the background
		this.background.draw();
		// this draws the player
		this.player.draw();
		// this will add shells to the obstacles array
        const rand = Math.floor((random()*10000)/7)
        // console.log(rand);
		if (frameCount % rand === 0) {
			this.obstacles.push(new Obstacle(this.shellImage));
			console.log('hello');
		}
		// we need to iterate over the obstacles array now and call for every object 
		// inside the draw function
		this.obstacles.forEach(function (obstacle) {
		
            obstacle.draw();
        
		})
		this.obstacles = this.obstacles.filter((obstacle) => {
			// console.log(this);
			// if we have a collision or the obstacle moves out of the screen 
			if (obstacle.collision(this.player) || (obstacle.y + obstacle.hieght) < 0) {
				return false
			} else {
				return true
			}
		})
	}
}
