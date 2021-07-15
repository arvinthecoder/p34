//Create variables here
var dog,dogImg,dogImg2;
var database;
var foodS, foodStock;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.2;
  //reading from the data base
  database.ref('food').on("value", readStock);
  textSize(20);
}


function draw() {  
  background("blue");
  if (keyWentDown(UP_ARROW)) {
    dog.addImage(dogImg2);
    writeStock(foodS)
  }
  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
   text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else (
    x=x-1
  )
database.ref('/').update({
  food: x
});

}



