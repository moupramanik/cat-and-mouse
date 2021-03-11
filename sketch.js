var cat,cat_running;
var mouse,mouse_running;
var garden,gardenImage;
function preload() {
 cat_running=loadAnimation("cat1.png,cat2.png,cat3.png,cat4.png");
mouse_running=loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png");
gardenImage=loadImage("garden.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite();
mouse=createSprite();
}

function draw() {

    background(255);
 cat.x=World.mouseX;
 cat.y=world.mouseY;   
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.addAnimation("catLastImage",catImage3);
    cat.changeAnimation("catLastImage");
    cat.velocityX=0;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("cat_running",catImage2);
    cat.changeAnimation("cat_running");
}

}
