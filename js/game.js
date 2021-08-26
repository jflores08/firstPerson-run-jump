class Game {

	constructor() {
		// this.background = new Background();
		// this.player = new Player();
        this.preStartScreen = true
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
        this.deadBB8Image = loadImage('assets/dead-icon.png');
        // this.stopwatch.start();     
	}
    
	draw() {
     if (this.preStartScreen == true){
        fill(204, 102, 0);
        rect(0,0,width,height)
        fill (255,255,255)
        rect(330,475, 315, 35)   
            textSize(26);
            fill(0, 0, 0);
            // text('Surrvive and avoid the shells!',350, (height/5))
            text('BB8 has foound himself in a haunted house with a dimentional rift. ',150, (height/5))
            text('Surrvive and avoid the shells!', 350, 200)
            text('Press Spacebar to jump',350, 300)
            text('Press spacebar to start', 350, 500)
            
        





        }else{

		    // here all the objects are drawn that the game needs
		    clear();
		    // this draws the background
		    this.background.draw();
         //Timer var
		    const timer = `${round(millis()/1000)}` + ':' + `${round(millis())}`
            // const timerText = text( `${timer} seconds have gone by!`, 350, height/5);
            // const gameOverText = 'text(`BB8 survived for ${timer}`, 350, height/2.5);'
       
            //Sets End Game condition
            if(this.player.health === 0){
                noLoop();
                rect(345,(height/2.5)-20,315,20)
                fill(255, 255, 255);
                text(`BB8 survived for ${timer}`, 350, height/2.5);
                
                this.deadBB8Image.draw();
       
            }
          //Draws Health  and Timer
            textSize(26);
            fill(205, 0, 0);
          
            text(`Health : ${this.player.health}`, (width - 350), (height - 50));
            text( `${timer} seconds have gone by!`, 350, height/5);
             // textsize(32)
            // text(this.player.health, 30, 30)
            // fill(black)
            // document.querySelector('.score #healthNum').innerText = this.player.health;
         
         
            //Makes random framecount number
            const rand = Math.floor((random()*10000)/7)  
            // this will add shells to the obstacles array  
            if (frameCount % rand === 0) {
             this.obstacles.push(new Obstacle(this.shellImage));
             console.log('health :' + this.player.health);}

		    // we need to iterate over the obstacles array now and call for every object 
		        // inside the draw function
                
               
                    this.obstacles.forEach(function (obstacle) {
                        obstacle.draw();
                        obstacle.drawn = true
                    })
                    this.player.draw();

                    // if (obstacle.drawn === true){
                    //     if (obstacle.positionSwitch){
                    //         this.player.draw();     
                    //         this.obstacles.forEach(function (obstacle) {
                        
                    //             obstacle.draw();
                    //         })
                    //     }
                    // } 
                    
        
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
	}
    
    gamefinished(){
        if (this.player.health > 0){
            return false
        } else{
            return true
        }       
    }
 
}
