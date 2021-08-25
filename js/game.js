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
        this.stopwatch = new Stopwatch ();
        
	}

	preloadGame() {
		this.backgroundImages = loadImage('assets/Perpetual-Hallway.gif');
		this.playerImage = loadImage('assets/player/bb8.gif');
		this.coinImage = loadImage(' assets/coins/tile000.png');
        this.shellImage = loadImage('assets/shells/8bit-red-shell.png');
        // this.stopwatch.start();     
	}

	draw() {
		// here all the objects are drawn that the game needs
		clear();
		// this draws the background
		this.background.draw();

        //Makes random framecount number
        const rand = Math.floor((random()*10000)/7)  

        if (frameCount % rand === 0) {
            this.obstacles.push(new Obstacle(this.shellImage));
            console.log('health :' + this.player.health);}

        //Timer var
		const timer = `${round((round(millis()/1000))/60)}` + ':' + `${round(millis()/1000)}` + ':' + `${round(millis())}`
        //Sets End Game condition
        if(this.player.health === 0){
                noLoop();
                text(`BB8 survived for ${timer}`, 40, height/2.5); 
        }
          //Draws Health  and Timer
            textSize(26);
            fill(205, 0, 0);
          
            text(`Health : ${this.player.health}`, 40, height/5);
            text( `${timer} seconds have gone by!`, 200, height/5);
        // textsize(32)
        // text(this.player.health, 30, 30)
        // fill(black)
            document.querySelector('.score #healthNum').innerText = this.player.health;


		
            
            //Makes random framecount number
            // const rand = Math.floor((random()*10000)/7)
            

            // this will add shells to the obstacles array     
            // if (frameCount % rand === 0) {
			    // this.obstacles.push(new Obstacle(this.shellImage));
			    // console.log('health :' + this.player.health);
		        // }
                // if (this.obstacles = 0){
                //     this.player.draw();
                // }else if (obstacle.positionSwitch){

		    // we need to iterate over the obstacles array now and call for every object 
		        // inside the draw function
                
                // if (!obstacle.positionSwitch()){
                    this.player.draw();
		            this.obstacles.forEach(function (obstacle) {
                        obstacle.draw();
                        
                        
                        
                    
                    })
                           
                    
        
		            //     }else{
                    //     this.player.draw();
                    // this.obstacles.forEach(function (obstacle) {
                            
                    //         obstacle.draw();
            
                    //     })
                    // }
                    
                     
                
            
             // this draws the player
                


                // }else{ 
                    
            
                
            // }
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
    
    gamefinished(){
        if (this.player.health > 0){
            return false
        } else{
            return true
        }       
    }
}
