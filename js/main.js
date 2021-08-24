const game = new Game();

function preload() {
	// here we preload the game assets
	game.preloadGame();

}
function setup() {
	createCanvas(600, 600);
	game.setup();
}
function draw() {

	game.draw();
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump();
	}
}