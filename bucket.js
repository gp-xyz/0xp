class Bucket{
    constructor(x,y,w,bh){
        this.x = x;
        this.y=y;
        this.w=w;
        this.bucketheight=bh;
        this.hit=false;
        this.hitcount = 0;


        let b1 = {c1:color(100),c2:color('red'),tiptxt:'busto',baldel:-666};
        let b2 = {c1:color(100),c2:color('purple'),tiptxt:'+$10,000',baldel:10000};
        let b3 = {c1:color(100),c2:color('yellow'),tiptxt:'+$50,000',baldel:50000};
        let b4 = {c1:color(100),c2:color('blue'),tiptxt:'+$100',baldel:100};
        let b5 = {c1:color(100),c2:color('brown'),tiptxt:'-$10,000',baldel:-10000};
        let b6 = {c1:color(100),c2:color('green'),tiptxt:'+$1,000,000',baldel:1000000};
        let b7 = {c1:color(100),c2:color(0,255,0),tiptxt:'x2',baldel:22};
        let b8 = {c1:color(100),c2:color(255,0,0),tiptxt:'-90%',baldel:101};

        let masterobj = {hacked:b1,airdrop:b2,alpha:b3,flip:b4,art:b5,ape:b6,pump:b7,rug:b8};
        this.nm = random(['hacked','airdrop','alpha','flip','art','ape','pump','rug']);
        this.c1 = masterobj[this.nm].c1;
        this.c2 = masterobj[this.nm].c2;
        this.txt = masterobj[this.nm].tiptxt;
        this.baldel = masterobj[this.nm].baldel;
    }
    show(){
        let fc = color(this.c1);
        fc.setAlpha(60);
        fill(fc);
        stroke('lime');
        noStroke();
        rect(this.x,this.y,this.w,this.bucketheight );
        let bordercolor = color(230,60);
        strokeWeight(5)
        stroke(bordercolor);
        line(this.x,this.y,this.x+this.w,this.y);
        line(this.x+this.w,this.y,this.x+this.w,this.y+this.bucketheight);

        fill('black');
        noStroke();
        if (this.hit){
            this.hitcount++;
            // fill(this.c1);
            textSize(7);
            text(this.txt,this.x+10,this.y+25);

        }
        else{
            // fill(this.c2);
            textSize(10);
            text(this.nm,this.x+10,this.y);

        }
        if (this.hitcount > 100){
            this.hitcount=0;
            this.hit=false;
            let tempc1 = this.c1;
            this.c1 = this.c2;
            this.c2=tempc1;
        }
        
    }
    activate(){
        this.hit=true;
        if (this.baldel == -666 && GLOBALBALANCE >0){
            GLOBALBALANCE=0;
        }
        else if (this.baldel == 22){
            GLOBALBALANCE = GLOBALBALANCE*2;
        }
        else if (this.baldel == 101){
            GLOBALBALANCE = GLOBALBALANCE*.1;
        }
        else{
            GLOBALBALANCE += this.baldel;

        }

        let tempc1 = this.c1;
        this.c1 = this.c2;
        this.c2=tempc1;

    }
}