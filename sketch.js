let bumpz;
let pegz;
let bg;
let mypucks=[];
let GLOBALBALANCE = 0;
let fc=1;
function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES);


  
  bg = new BG();
  bumpz = new Bumpers();
  pegz = new Pegs(bumpz);
  for (let i=0;i<1;i++){

    let mypuck = new Puck(pegz);
    mypuck.applyForce(createVector(0,1));
    mypucks.push(mypuck);
  }

}

function draw() {
  // background('blue');
  fc++;

  bg.show();



  bumpz.show();
  pegz.show();
  textSize(60);
  stroke('white');
  fill('grey');
  text('0xPLINKO',30,50);

  textSize(20);
  stroke('red');
  fill('red');
  text('Balance: $' + GLOBALBALANCE,30,80);
  // text(GLOBALBALANCE,450,60);
 for (let i=0;i<mypucks.length;i++){
  mypucks[i].show();
 }

 if(fc%300==0){
  let newpuck = new Puck(pegz,0,0);
  newpuck.applyForce(createVector(0,1));
  mypucks.push(newpuck);

 }
  
  // noLoop();


  
}
function mousePressed(){
  if (mouseY <bumpz.ystart*2)
  {
    let newpuck = new Puck(pegz,mouseX,mouseY);
    newpuck.applyForce(createVector(0,1));
    mypucks.push(newpuck);
    circle(mouseX,mouseY,100);
  }
}