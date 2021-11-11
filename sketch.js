var bg;
var doctor
var doctorImage
var corona
var virusGroupG,virusGroupY,virusGroupB,virusGroupP,virusGroupR
var virus1,virus2,virus3,virus4,virus5
var patient1,patient2,patient1Img,patient2Img;
var score = 0;
function preload(){
bg=loadImage("Hospital cw.jpg");
doctorImage=loadImage("Doctor cw.png");
virus1=loadImage("coorona cw.png")
virus2=loadImage("corona1 cw.png")
virus3=loadImage("corona2 cw.png")
virus4=loadImage("corona3 cw.png")
virus5=loadImage("corona4 cw.png")
patient1Img=loadImage("patient 1 cw.png")
patient2Img=loadImage("patient 2 cw.png")
}
function spawnVirusG(){
if(frameCount%80===0){
  var virusG=createSprite(0,0,50,50)
  virusG.velocityX=4;
  virusG.y=Math.round(random(50,350))
  virusG.addImage(virus1);
  
  
virusG.scale=0.15;
virusGroupG.add(virusG);
}
}

function spawnVirusY(){
  if(frameCount%100===0){
    var virusY=createSprite(0,0,50,50)
    virusY.velocityX=4;
    virusY.y=Math.round(random(50,350))
    virusY.addImage(virus2);
    
    
  virusY.scale=0.15;
  virusGroupY.add(virusY);
  }
  }

  function spawnVirusB(){
    if(frameCount%120===0){
      var virusB=createSprite(0,0,50,50)
      virusB.velocityX=4;
      virusB.y=Math.round(random(50,350))
      virusB.addImage(virus3);
      
      
    virusB.scale=0.15;
    virusGroupB.add(virusB);
    }
    }

    function spawnVirusP(){
      if(frameCount%140===0){
        var virusP=createSprite(0,0,50,50)
        virusP.velocityX=4;
        virusP.y=Math.round(random(50,350))
        virusP.addImage(virus4);
        
        
      virusP.scale=0.15;
      virusGroupP.add(virusP);
      }
      }

      function spawnVirusR(){
        if(frameCount%160===0){
          var virusR=createSprite(0,0,50,50)
          virusR.velocityX=4;
          virusR.y=Math.round(random(50,350))
          virusR.addImage(virus5);
          
          
        virusR.scale=0.15;
        virusGroupR.add(virusR);
        }
        }

function setup() {

  createCanvas(800,400);
  doctor=createSprite(450,200,50,50);
  doctor.addImage("doctor",doctorImage);
  doctor.scale=0.4;
  doctor.debug=true;
  doctor.setCollider("rectangle",0,0,200,300);
  patient1=createSprite(700,250,50,50)
  patient2=createSprite(650,250,50,50)
  patient1.addImage("patient1",patient1Img)
  patient2.addImage("patient2",patient2Img)
  patient1.scale=0.4
  patient2.scale=0.5

  virusGroupG=createGroup();
  virusGroupY=createGroup();
  virusGroupB=createGroup();
  virusGroupP=createGroup();
  virusGroupR=createGroup();
 
  //createSprite(400, 200, 50, 50);
}



function draw() {
  background(bg); 
  textSize(20);
  fill("red");
  stroke(4);
  text("SCORE ~ "+score,600,50);

  if(keyDown(UP_ARROW)){
doctor.y=doctor.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    doctor.y=doctor.y+5;
      }
      if(virusGroupG.isTouching(doctor)){
     virusGroupG.destroyEach();

      }
      if(virusGroupY.isTouching(doctor)){
        virusGroupY.destroyEach();
   
         }
         if(virusGroupB.isTouching(doctor)){
          virusGroupB.destroyEach();
     
           }
           if(virusGroupP.isTouching(doctor)){
            virusGroupP.destroyEach();
       
             }
             if(virusGroupR.isTouching(doctor)){
              virusGroupR.destroyEach();
         
               }
  spawnVirusG() ;
  spawnVirusY() ;
  spawnVirusB() ;
  spawnVirusP() ;
  spawnVirusR() ;
  drawSprites();
}