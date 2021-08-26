class Background {
    constructor() {
        this.x = (0)
    }
    draw() {
        // console.log('this is the background drawing');
        // console.log(width, height);
        // game.backgroundImages {
        //  console.log('bckgrnd drawing ',game.backgroundImages)
         image(game.backgroundImages, this.x, 0, width, height);
         // here we need to add a second image - 
         
            // if the image moves out of the screen then we need to reset it
         // to it's starting position
        
        // }
       // image(game.backgroundImages[0].src, 0, 0, width, height);
        // image(game.backgroundImages[1].src, 0, 0, width, height);
        // image(game.backgroundImages[2].src, 0, 0, width, height);
        // image(game.backgroundImages[3].src, 0, 0, width, height);
        // image(game.backgroundImages[4].src, 0, 0, width, height);
    };
}