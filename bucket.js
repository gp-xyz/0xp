class Bucket{
    constructor(x,y,w,bh){
        this.x = x;
        this.y=y;
        this.w=w;
        this.bucketheight=bh;
        this.hit=false;
        this.hitcount = 0;


        let b1 = {c1:color('red'),c2:color('red'),tiptxt:'fked',baldel:-666};
        let b2 = {c1:color('black'),c2:color('purple'),tiptxt:'free money',baldel:10000};
        let b3 = {c1:color('green'),c2:color('yellow'),tiptxt:'score',baldel:50000};
        let b4 = {c1:color('brown'),c2:color('blue'),tiptxt:'print',baldel:100};

        let masterobj = {hacked:b1,airdrop:b2,alpha:b3,flip:b4};
        this.nm = random(['hacked','airdrop','alpha','flip']);
        this.c1 = masterobj[this.nm].c1;
        this.c2 = masterobj[this.nm].c2;
        this.txt = masterobj[this.nm].tiptxt;
        this.baldel = masterobj[this.nm].baldel;
    }
    show(){

        fill(this.c1);
        stroke('lime');
        rect(this.x,this.y,this.w,this.bucketheight );

        if (this.hit){
            this.hitcount++;
            fill(this.c1);
            textSize(25);
            text(this.txt,this.x+10,this.y+25);

        }
        else{
            fill(this.c2);
            textSize(25);
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
        if (this.baldel == -666){
            GLOBALBALANCE=0;
        }
        else{
            GLOBALBALANCE += this.baldel;

        }

        let tempc1 = this.c1;
        this.c1 = this.c2;
        this.c2=tempc1;

    }
}