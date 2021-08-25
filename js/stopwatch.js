class Stopwatch {

    constructor(){
        this.running = 0
        this.time = 0;   
        this.hour = 0;
        this.min = 0;
        this.sec = 0;
        this.millisec = 0;
    }

    start(){
	    started = window.setInterval(clockRunning, 1000);	
    }

    stop(){
	    window.clearInterval(started);
    }

    clockRunning(){
	    this.time++;
	    this.sec++;
	    if (this.sec == 60){
		    this.min += 1;
		    this.sec = 0;
	    if (this.min == 60){
		    this.hour += 1;
		    this.min = 0;
	    }
	
	
	}

	document.getElementById("display-area").innerHTML = (this.hour ? (this.hour > 9 ? this.hour : "0" + this.hour) : "00") 
	+ ":" + (this.min ? (this.min > 9 ? this.min : "0" + this.min) : "00") + ":" + (this.sec > 9 ? this.sec : "0" 
		+ this.sec);
    };
}