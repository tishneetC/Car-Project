var dog, happyDog, database, foodS, foodStock

function preload()
{
	dog = loadImage("./images/dogImg.png"); 
  happyDog = loadImage("./images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  
  

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  

  background(46, 139, 87)

  var Dog = createSprite(250,250,50,50); 
  Dog.addImage(dog);
  Dog.scale = 0.1;
  
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(happyDog);
  
  }

  

  drawSprites();

  
  textSize(20);
  fill(0,0,0);
  text("Note: Press UP_ARROW Key To Feed Drago Milk", 30, 30 );

  text("Food Remaining: " + foodS, 10, 100 );
  
  
  
 

}

  

function readStock(data){

  foodS = data.val();

}

function writeStock(x){

  if(x<=0) {
    x=0; 
  }else{
    x = x - 1;
  }

  database.ref('/').update({

Food : x

  }
  )

}

