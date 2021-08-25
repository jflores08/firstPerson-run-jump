class Stopwatch {

//     constructor(){
//         this.running = 0
//         this.time = 0;   
//         this.hour = 0;
//         this.min = 0;
//         this.sec = 0;
//         this.millisec = 0;
//     }

//     start(){
// 	    started = window.setInterval(clockRunning, 1000);	
//     }

//     stop(){
// 	    window.clearInterval(started);
//     }

//     clockRunning(){
// 	    this.time++;
// 	    this.sec++;
// 	    if (this.sec == 60){
// 		    this.min += 1;
// 		    this.sec = 0;
// 	    if (this.min == 60){
// 		    this.hour += 1;
// 		    this.min = 0;
// 	    }
	
	
// 	}

// 	document.getElementById("display-area").innerHTML = (this.hour ? (this.hour > 9 ? this.hour : "0" + this.hour) : "00") 
// 	+ ":" + (this.min ? (this.min > 9 ? this.min : "0" + this.min) : "00") + ":" + (this.sec > 9 ? this.sec : "0" 
// 		+ this.sec);
//     };
// }
    constructor(){
        this.timeBegan = null;
        this.timeStopped = null;
        this.stoppedDuration = 0;
        this.started = null;
    }
    start(){
        if (this.timeBegan === null) {
            this.timeBegan = new Date();
        }

        if (this.timeStopped !== null) {
            this.stoppedDuration += (new Date() - this.timeStopped);
        }
    console.log(this.stoppedDuration);

    this.started = setInterval(clockRunning, 10);	
    }

    stop() {
        this.timeStopped = new Date();
        clearInterval(this.started);
    }
 
    reset() {
        clearInterval(this.started);
        this.stoppedDuration = 0;
        this.timeBegan = null;
        this.timeStopped = null;
        document.getElementById("display-area").innerHTML = "00:00:00.000";
    }

    clockRunning(){
        this.currentTime = new Date()
        , this.timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
        , this.hour = timeElapsed.getUTCHours()
        , this.min = timeElapsed.getUTCMinutes()
        , this.sec = timeElapsed.getUTCSeconds()
        , this.ms = timeElapsed.getUTCMilliseconds();

    document.getElementById("display-area").innerHTML = 
        (this.hour > 9 ? this.hour : "0" + this.hour) + ":" + 
        (this.min > 9 ? this.min : "0" + this.min) + ":" + 
        (this.sec > 9 ? this.sec : "0" + this.sec) + "." + 
        (this.ms > 99 ? this.ms : this.ms > 9 ? "0" + this.ms : "00" + this.ms);
    };
}