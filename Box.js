class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("wood1.png");
  }
display(){
  if(this.body.speed < 5){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
      box1.score()
      box2.score()
      box3.score()
      box4.score()
      box5.score()
      box6.score()
      box7.score()
      box8.score()
      box9.score()
      box10.score()
      box11.score()
      box12.score()
      box13.score()
      box14.score()
      box15.score()
      box16.score()
      box17.score()
      box18.score()
      box19.score()
      box20.score()
      box21.score()
      box22.score()

      
    }
  }

}



