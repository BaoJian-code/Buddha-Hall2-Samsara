let n = 6; //amount of rotatation
let a = 0;
let img;
let c = 1;
let ca = 0.005;
let r = 350;
let ra = 0.25;
let w,song;

function preload() {
	song=loadSound('bgm.mp3')
	img = loadImage('buddha.png');
}

function setup() {
		//start website sound
	getAudioContext().suspend();
	userStartAudio();
	//
	song.loop();
	imageMode(CENTER);
	createCanvas(windowWidth, windowHeight);
	background(0);
	angleMode(DEGREES);
	colorMode(HSB, 255);
	stroke(255, 255, 255);
	// timer
	let counter = 0;
	let min = 0;
	noStroke();
	fill(255);
	textSize(20);
	text('Be Focused ' + nf(min, 2) + ':' + nf(counter, 2), 0, height - 20);

	function timeIt() {
		if (counter == 59) {
			min++;
			counter = 0;
		}
		counter++;
		fill(0);
		rect(100, height - 40, 200, 40);
		fill(255);
		textSize(20);
		text('Be Focused ' + nf(min, 2) + ':' + nf(counter, 2), 0, height - 20);
	}

	setInterval(timeIt, 1000);
	//



}

function draw() {


	a += 0.5; //speed of rotate
	push();
	translate(width / 2, height / 2);

	rotate(a);

	//change brightness
	c += ca;
	if (c > 6 || c < 1) {
		ca *= -1;
	}

	for (let i = 0; i <= 720; i += 1) {

		bri = (i / c) % (360 / n);
		bri = map(bri, 0, 360 / n, 0, 255);
		strokeWeight(10);
		stroke(255, 0, bri);
		push();
		rotate(i);
		line(-height / 2 + 20, 0, height / 2 - 20, 0);
		pop();
	}
	pop();

	r += ra;
	if (r > 600 || r < 350) {
		ra *= -1;
	}
	fill(255, 255, 255);
	ellipse(width / 2, height / 2, r);
	image(img, width / 2 + 10, height / 2 + 240, 800, 800);

	for (i = 0; i <= 30; i++) {
		noStroke();
		fill(255, 255, 255, 255 - i * 10);
		ellipse(width / 2 + 5, height / 2 - 10, i);
	}



}