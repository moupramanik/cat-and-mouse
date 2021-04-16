var cat,cat_running;
var mouse,mouse_running;
var garden,gardenImage;
function preload() {
 cat_running=loadAnimation("images/cat1.png,images/cat2.png,images/cat3.png,images/cat4.png");
mouse_running=loadAnimation("images/mouse1.png,images/mouse2.png,images/mouse3.png,images/mouse4.png");
gardenImage=loadImage("images/garden.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600);
cat.addAnimation("cats_sleeping",cat_running);
mouse=createSprite(200,600);
mouse.addAnimation("mouse_sleeping",mouse_running);
}

function draw() {

    background(255);
 /*cat.x=World.mouseX;
 cat.y=world.mouseY;   
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.addAnimation("catLastImage",catImage3);
    cat.changeAnimation("catLastImage");
    cat.velocityX=0;
}*/
    drawSprites();
}


/*function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("cat_running",catImage2);
    cat.changeAnimation("cat_running");
}

}*/
