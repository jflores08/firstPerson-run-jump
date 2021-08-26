const game = new Game();

function preload() {
	// here we preload the game assets
	game.preloadGame();

}
function setup() {
	createCanvas(1000, 600);
	game.setup();
}
function draw() {

	game.draw();
}

    function keyPressed() {
        if (keyCode){}
        if (keyCode){}
        if (game.preStartScreen){
            if (keyCode === 32){
                game.preStartScreen = false;
            }
        }

	    if (keyCode === 32 && !game.player.inAirValue){
            console.log('can jump');
		    game.player.jump();
	    }
    }
   