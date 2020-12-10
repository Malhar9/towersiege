const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;
var ball, slingshot;
var gr,gr2
var gameState = "onSling";

var score = 0;



function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,width,20);
    gr=new Ground(390,250,400,20)
    gr2=new Ground(700,360,300,20)
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    box9 = new Box(390,155,30,40);
    box10 = new Box(720,220,40,40);
    box11 = new Box(740,260,40,40);
    box12 = new Box(660,260,40,40);
    box13 = new Box(700,260,40,40);
    box14 = new Box(620,300,40,40);
    box15 = new Box(660,300,40,40);
    box16 = new Box(780,300,40,40);
    box17 = new Box(740,300,40,40);
    box18 = new Box(700,300,40,40);
  box20= new Box(680,220,40,40)
    
    box21= new Box(700,180,40,40)
    ball = new Ball(200,50);

    slingshot = new SlingShot(ball.body,{x:200, y:50});

}

function draw(){
    background("black")
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();


  box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
   box20.display();
   box21.display();
    ball.display()
    gr.display();
    gr2.display();

}

function mouseDragged(){
   // if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //  }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
        
    Matter.Body.setPosition(ball.body,{x:200,y:50})

    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
       background("white")
    }
    else{
        background("black")
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
