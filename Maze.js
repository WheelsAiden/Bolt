//Team Members: Caleb Hermann & Aiden Walker
//Date 1.24.2025
//Program: Maze
//Hardware: Bolt #SB-EC76


//Begin Pragram
  async function startProgram() {

var distance1=70;
var distance2 = 0;
var distance3 = 0;
var distance4 = 0;
var distance5 = 0;
var distance6 = 0;
var distance7 = 0;
var done1 = false;
var done2 = false;
var done3 = false;
var done4 = false;
var done5 = false;
var done6 = false;
var done7 = false;

//Start & Say Start
//Bolt will say start across LED's & say it outloud
//Driver: Aiden
//Navigator: Caleb

//wait scrollMatrixText('start',{r:0,g:255,b:0},10,true);
//wait speak('Start', true);


//Green Checkpoint
//LED's turn Green
//Driver: Caleb
//Navigator: Aiden
setSpeed(100);
await delay(1);
	while (getDistance() <distance1 || getDistance() >0){
	if (done1 === false && getDistance() > distance1){
		stopRoll();
		done1 = true;
	}
	}
setMainLed({r: 0, g: 255, b: 0});
//Shound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Caleb
//Navigator: Aiden

	  /*
if (getDistance()< distance2 && getDistance() > distance1){
		setSpeed(50);
	}
	else if(done2 === false && getDistance() > distance2){
		stopRoll();
		done2 = true;
	}

//Red Checkpoint
//LED's turn Red
//Driver: Aiden
//Navigator: Caleb

if (getDistance()< distance3 && getDistance() > distance2){
		setSpeed(50);
	}
	else if (done3 === false && getDistance() > distance3){
		stopRoll();
		done3 = true;
	}

//Shound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Caleb
//Navigator: Aiden

if (getDistance()< distance4 && getDistance() > distance3){
		setSpeed(50);
	}
	else if (done4 === false && getDistance() > distance4){
		stopRoll();
		done4 = true;
	}

//Purple Checkpoint
//LED's turn Purple
//Driver: Aiden
//Navigator: Caleb

	if (getDistance()< distance5 && getDistance() > distance4){
		setSpeed(50);
	}
	else if (done5 === false  && getDistance() > distance5){
		stopRoll();
		done5 = true;
	}

//Shound #3 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Caleb
//Navigator: Aiden

if (getDistance()< distance6 && getDistance() > distance5){
		setSpeed(50);
	}
	else if (done6 === false && getDistance() > distance6){
		stopRoll();
		done6 = true;
	}
//Blue Checkpoint
//LED's turn Purple
//Driver: Aiden
//Navigator: Caleb

if (getDistance()< distance7 && getDistance() > distance6){
		setSpeed(50);
	}
	else if (done7 === false && getDistance() > distance7){
		stopRoll();
		done7 = true;
	}
//Finished & Say Finish
//Bolt will say Finished across LED's & say it out loud
//Driver: Caleb
//Navigator: Aiden
*/

//End Program
}
