class Game {

	constructor() {
		// this.background = new Background();
		// this.player = new Player();
        this.preStartScreen = true
        this.playerGameEnd = true
        this.gameClock = true
        this.easy = false
        this.Medium = false
        this.Hard = false
		this.backgroundImages = null;
		this.playerImage = null;
		this.obstacles = [];
        this.targets = [];
        this.shellNum = 30
        this.targetNum = 10
        this.shellSpeed = 0.003
        this.targetSpeed = 0.003
        
	}

	setup() {
		this.background = new Background();
        this.portal = new Portal();
		this.player = new Player();
        this.stopwatch = new Stopwatch ();
        this.difficulty = new Difficulty();
        this.difficulty.easy = false
        this.difficulty.Medium = false
        this.difficulty.Hard = false
	}

	preloadGame() {
		this.backgroundImages = loadImage('assets/Perpetual-Hallway.gif');
		this.playerImage = loadImage('assets/player/bb8.gif');
		this.coinImage = loadImage(' assets/coins/tile000.png');
        this.shellImage = loadImage('assets/shells/8bit-red-shell.png');
        this.deadBB8Image = loadImage('assets/dead-icon.png');
        this.portalGunImage = loadImage('assets/Portal/Portal_Gun2.png');
        this.portalImage = loadImage('assets/Portal/Portal-1.png');
        // this.stopwatch.start();     
	}
    
	draw() {
     if (this.preStartScreen == true){
         //startScreen Background
        fill(204, 102, 0);
        rect(0,0,width,height)

    
        //key label rectangles
        rect(140,295, 120, 35)
        rect(140,195,132,35)
        rect(140,245,150,35)


        // key diagram
        //U&D Arrows keys
        square(190, 360, 30);
        square(190, 400, 30);
        //L&R Arrows keys
        fill (255,255,255)
        square(150, 400, 30);
        square(230, 400, 30);
        //Space key
        rect(110, 450, 200, 30);
        //Arrowkey labels
        fill(0, 0, 0);
        text('L', 157, 425);
        text('R', 235, 425);
        //Spacekey label
        text('Spacebar', 150, 475)

        // Difficulty
        // Difficulty Number keys
        fill(0, 0, 0);
        text('Press:', 580, 200);
        fill (255,255,255)
        square(600, 220, 30);
        square(600, 270, 30);
        square(600, 320, 30);
        fill(0, 0, 0);
        text('1', 607, 245);
        text('2', 607, 295);
        text('3', 607, 345);
        
        //Difficulty ratings
        text('Easy', 707, 245);
        text('Medium', 707, 295);
        text('Hard', 707, 345);


       //Start key 
        fill (255,255,255)
        rect(330,525, 315, 35);  
        fill(0, 0, 0);
        text('Press spacebar to start', 350, 550);

            textSize(26);
            fill(0, 0, 0);
            // text('Surrvive and avoid the shells!',350, (height/5))
            text('BB8 has found himself in a haunted house with a dimentional rift. ',150, 70)
            text('Surrvive and avoid the shells!', 350, 120)
            //Controls
            text('Controls:', 155, 180)
            text('Press Spacebar to jump',70, 320)
            text('Press Left_Arrow to move left', 70, 220)
            text('Press Right_Arrow to move right', 70, 270)
            text('Difficulty:', 750, 180)
            
            
        if (this.easy){
            game.shellNum = 25
            game.shellSpeed = 0.09
        }
        if (this.Medium){
            game.shellNum = 30
            game.shellSpeed = 0.001
        }
        if (this.Hard){
            game.shellNum = 40
            game.shellSpeed = 0.00001
        }




        }else{

		    // here all the objects are drawn that the game needs
		    clear();
		    // this draws the background
		    this.background.draw();
         //Timer var
            const miliSecs = `${round(millis())}`
            const secs = round(miliSecs/1000)
		    const timer = `${secs}` + ':' + `${miliSecs}`
            // const timerText = text( `${timer} seconds have gone by!`, 350, height/5);
            // const gameOverText = 'text(`BB8 survived for ${timer}`, 350, height/2.5);'
       
            //Sets End Game condition
            if(this.player.health === 0){
                noLoop();
                this.gameClock = false
                rect(345,(height/2.5)-20,315,20)
                fill(255, 255, 255);
                text(`BB8 survived for ${timer}`, 350, height/2.5);
                // this.portalImage.draw();
                this.playerGameEnd = false
                this.portal.draw();
                // this.deadBB8Image.draw();
       
            }
            else if(this.player.portalGunCharge === 100){
                noLoop();
                rect(40,(height/2.5)-20,800,40)
                 fill(255, 255, 255);
                 text(`Congrats, BB8 was able to open a portal back to his dimension :)`, 40, height/2.5)-20;
                 this.playerGameEnd = false
                 this.portal.draw();
                 
                 
                 
            }
            
            // (this.secs > 120){
            //     noLoop();
            //     rect(345,(height/2.5)-20,400,20)
            //     fill(255, 255, 255);
            //     text(`Congrats, BB8 survived and broke through the dimensional barrier :)`, 350, height/2.5);
            //     this.player.draw();
            // }


          //Draws Target Bar, Health Bar, and Timer
            
          textSize(26);
            const TargetPercent = (this.player.portalGunCharge) / 100
            fill(255, 255 , 255)
            rect(140, 70,130,30)
            fill(25, 236, 18);
            rect(140,  70, (130 * TargetPercent), 30)
            fill(25, 236, 18);
            text(`Portal Gun Charge : ${this.player.portalGunCharge}`, (140), 50);
          
            const healthPercent = (this.player.health) / 100
            fill(255, 255 , 255)
            rect(685, 70,130,30)
            fill(205, 0, 0);
            rect(685,  70, (130 * healthPercent), 30)
            fill(205, 0, 0);
            text(`Health : ${this.player.health}`, (width - 320), 50);

            this.gameClock && (text( `${timer}`, 450, 235));
            this.gameClock && (text(`seconds have gone by!`, 370, 262));
             // textsize(32)
            // text(this.player.health, 30, 30)
            // fill(black)
            // document.querySelector('.score #healthNum').innerText = this.player.health;
         
         
            //Makes random framecount number
            const rand = Math.floor((random()*10000)/this.shellNum)  
            // this will add shells to the obstacles array  
            if (frameCount % rand === 0) {
             this.obstacles.push(new Obstacle(this.shellImage, this.shellSpeed));
             console.log('health :' + this.player.health);}
            console.log(this.shellNum)
		    // we need to iterate over the obstacles array now and call for every object 
		        // inside the draw function
                
               
                    this.obstacles.forEach(function (obstacle) {
                        obstacle.draw();
                        obstacle.drawn = true
                    })
                    this.playerGameEnd && (this.player.draw());

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

              //Makes another random framecount number
              const rand2 = Math.floor((random()*10000)/this.targetNum)  
              // this will add poratl guns to the targets array  
              if (frameCount % rand2 === 0) {
               this.targets.push(new Target(this.portalGunImage, this.targetSpeed));
               console.log('Portal Charge :' + this.player.portalGunCharge);}
              console.log(this.targetNum)
              // we need to iterate over the targets array now and call for every object 
                  // inside the draw function
                  
                 
                      this.targets.forEach(function (target) {
                          target.draw();
                          target.drawn = true
                      })
                      this.playerGameEnd && (this.player.draw());
  
                      // if (target.drawn === true){
                      //     if (target.positionSwitch){
                      //         this.player.draw();     
                      //         this.target.forEach(function (target) {
                          
                      //             target.draw();
                      //         })
                      //     }
                      // } 
                      
          
                      //     }else{
                      //     this.player.draw();
                      // this.targets.forEach(function (target) {
                              
                      //         target.draw();
              
                      //     })
                      // }
                      
                       
                  
              
               // this draws the player
                  
  
  
                  // }else{ 
                      
              
                  
              // }
              this.targets = this.targets.filter((target) => {
              // console.log(this);
              // if we have a collision or the obstacle moves out of the screen * target.y > height *
                  if (target.collision(this.player) || (target.y + target.hieght) < 0) {
                      return false
                  } else {
                      return true
                  }
              })
        }
	}
    
    gamefinished(){
        if ((this.player.health > 0) || (this.player.portalGunCharge < 100)){
            return false
        } else{
            return true
        }       
    }
 
}
