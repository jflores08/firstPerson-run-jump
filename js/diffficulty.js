class Difficulty {
    constructor(){
    this.Hard = false;
    this.Medium = false;
    this.easy = false;
    }
    easy(){
        game.shellNum = 1000
        game.shellSpeed = 0.03
    }

    Medium(){
        game.shellNum = 20
        game.shellSpeed = 0.001
    }

    Hard(){
        game.shellNum = 3
        game.shellSpeed = 0.00001
    }


}