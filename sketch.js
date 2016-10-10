var time1 = 1000;
var time2 = 30000;

var angle = 50;
var offset = 50;
var scalar = 1;
var speed = .005;
var r = 0;


var background;
var earth;
var thesun;
var star;
//var music;

function preload(){

   //music = loadSound("acrosstheuniverse.mp3");
   background = loadImage("background.jpg");
   earth = loadImage("earth.png");
   thesun = loadImage("sun.png");
   star = loadImage("star.png");
}

function setup() {
  createCanvas(1000,700);
  imageMode(CENTER);
  image(background, width/2,height/2);


}

function draw(){
  image(background, width/2,height/2);

  rotate(r);
  r = r + .005;
  image(earth, 500, 500, 300,300);

  rotate(r);
  r = r + .001;
    image(star, 700, 550, 200, 200);

    rotate(r);
    r = r + .001;
      image(star, 400, 600, 100, 100);

      rotate(r);
      r = r + .001;
        image(star, 200, 200, 100, 100);



var currentTime = millis();
if (currentTime > time1) {

  rotate(r);
  r = r + .001;
  image(thesun, 20, 20, 1000,1000);
}



if (currentTime > time2) {

  rotate(r);
  r = r + .01;
  image(thesun, 20, 20, 1000,1000);

  x = x + 2;
   image(star, x, y,500,500);
 }

}
