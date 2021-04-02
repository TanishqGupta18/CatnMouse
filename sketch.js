
var cat, mouse1, background
var catImg,catAnimation, mouseImg,mouseAnimation,mouseCollided,backgroundImg




function preload() {
    //load the images here
mouseImg = loadAnimation("mouse1.png");
mouseAnimation = loadAnimation("mouse2.png","mouse3.png");
mouseCollided = loadAnimation("mouse4.png")

catImg = loadAnimation("cat1.png");
catAnimation = loadAnimation("cat2.png","cat3.png");
catCollided = loadAnimation("cat4.png");

backgroundImg = loadImage("garden.png")

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(800,600,20,20);
    cat.addAnimation("catImage",catImg);
    cat.scale = 0.15;
  //cat.debug = true;

//  background = createSprite(500,400,width,height);
//  background.addImage("bg",backgroundImg);
//  background.scale = 1;

    mouse1 = createSprite(170,600,20,20)
    mouse1.addAnimation("mouseImage",mouseImg);
    mouse1.scale = 0.15;
 // mouse1.debug = true;
}


function draw() {

    background(backgroundImg);
    //cat.depth = background.depth +1;

//condition to evalute if tom and jerry collide
//NOTE:
//Due to some (I guess) Techinical Errors ,the computer is detecting touch even when it's not and changing the animation even before the cat starts moving.
//Kindly check if there is some mistake in the below snippet

//if (cat.x- mouse1.x < cat.x + mouse1.width/2){
//    mouse1.addAnimation("mouseCollided",mouseCollided);
//    mouse1.changeAnimation("mouseCollided");
//
//    cat.addAnimation("catCollided",catCollided);
//    cat.changeAnimation("catCollided");
//
//    cat.velocityX = 0;
//}

//All is working fine, just the animations are changed to the collided ones from the starting.
//I have tried several different algorithms and some other ways to get the required product, all have the same single animation problem.
//I am using the .isTouching function, for now


if(mouse1.isTouching(cat)){
    mouse1.addAnimation("mouseCollided",mouseCollided);
    mouse1.changeAnimation("mouseCollided");

    cat.addAnimation("catCollided",catCollided);
    cat.changeAnimation("catCollided");

    cat.velocityX = 0;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation.
if(keyCode === LEFT_ARROW){
    cat.velocityX = -2
    cat.addAnimation("catRunning",catAnimation)
    cat.changeAnimation("catRunning");

    mouse1.addAnimation("mouseRunning",mouseAnimation)
    mouse1.changeAnimation("mouseRunning");
    mouse1.frameDelay = 25;
}

}
