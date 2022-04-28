class Puck{
    constructor(pegs,x=0,y=0){
        this.pegsobj = pegs;
        this.action = true;
        this.actcounter = 0;
        this.c = color('lime');
        
        this.pos = createVector(x,y);
        if (x==0 && y==0){

        
        this.pos = createVector(random(0,width),50);
        }
        
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.pucksize=25;
        this.mybucket = -1;

    }
    show(){
        let offset = 2;
        fill('black');
        noStroke();
        circle(this.pos.x+offset,this.pos.y+offset,this.pucksize);
        fill(this.c);
        circle(this.pos.x,this.pos.y,this.pucksize);
        if (this.action)
        {
            
            
            // noStroke();
            // fill(color(255,200));
            // arc(this.pos.x,this.pos.y,this.pucksize*.9,this.pucksize*.9,190,300,PI);
            // arc(this.pos.x,this.pos.y,this.pucksize*.1,this.pucksize*.1,180,270,PI);
            this.update()

        }
        else{
            this.actcounter++;
            // if (this.actcounter<50){
            //     fill(this.c);
            //     circle(this.pos.x,this.pos.y,this.pucksize);

            // }
        }
    }
    move(){

    }
    update(){

        this.pos.add(this.vel);
        this.vel.add(this.acc);

        this.collisions();
      
    }
    collisions(){

        this.checkBumpersCollision()

        //check x wall colide
        if (this.pos.x<0 || this.pos.x>width){
            this.vel.x = 0-this.vel.x;
        }

        //check peg collide and bounce
        // let coldist = abs(this.pucksize - this.pegsobj.pegsize);
        let coldist = (this.pucksize + this.pegsobj.pegsize)/2;
        for (let i=0;i<this.pegsobj.peglist.length;i++)
        {
            let peg1 = this.pegsobj.peglist[i];
            if (dist(this.pos.x,this.pos.y,peg1.x,peg1.y) < coldist){
                let xforce = this.pos.x - peg1.x;
                let yforce = this.pos.y - peg1.y;
                let newforce = createVector(xforce/10,yforce/10)
                this.changeDirection(newforce);
            }
        }

        this.checkBucketCollision();

    }
    checkBumpersCollision(){
        let bumperPegs = this.pegsobj.bmpr.peglist;

        //check peg collide and bounce
        for (let i=0;i<bumperPegs.length;i++)
        {
            let peg1 = bumperPegs[i];
            if (dist(this.pos.x,this.pos.y,peg1.x,peg1.y) < 30){
                let xforce = this.pos.x - peg1.x;
                let yforce = this.pos.y - peg1.y;
                let newforce = createVector(xforce/3,yforce/3)
                this.changeDirection(newforce);
            }
        } 
    }
    checkBucketCollision(){
        let buckets = this.pegsobj.bucketlist;

        //check bucket collide and freeze if win
        let bkwid =buckets[0].w;
        let bucketnum = floor(this.pos.x/buckets[0].w);
        if(this.mybucket != -1 && bucketnum!=this.mybucket){
            this.action=false;
        }
        else if (this.pos.y > buckets[0].y && this.action)
        {

            buckets[bucketnum].activate();
            this.mybucket = bucketnum;
            // noLoop();
            
        }
        if (this.pos.y>=height-this.pucksize){
            this.action=false;
        }
        // for (let i=0;i<buckets.length;i++)
        // {
        //     if (this.action)
        //     {
        //         let buck = buckets[i];
        //         let centerpoint = createVector(buck.x+buck.w/2,buck.y+50)
        //         circle(centerpoint.x,centerpoint.y,10);
        //         if (dist(this.pos.x,this.pos.y,centerpoint.x,centerpoint.y) < bkwid && (this.pos.y > this.pegsobj.bucketstart+this.pucksize/2)){
        //             this.action=false;
        //             // this.c = this.pegsobj.bucketlist[i].c1;
        //             this.pegsobj.bucketlist[i].activate();
        //         }
        //     }


        // }

    }
        


    
    changeDirection(force){
        this.vel=force;
        this.update;
    }

    applyForce(force){
        if (force==0){
            this.acc=createVector(0,0);
            this.vel=createVector(0,0);
        }
        this.acc=force;
        this.update();
    }
}
