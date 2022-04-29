
class Pegs{
    constructor(bmpr){
        this.bmpr = bmpr;
        this.pegsize=9;
        this.peglist = [];
        this.bucketlist = [];
        this.hc = 6;
        this.vc = bmpr.hmps;
        this.xstart = 2*bmpr.pointh;
        this.ystart = bmpr.ystart + bmpr.trih/2;
        this.rowpairs = bmpr.hmps;
        this.ydelta = bmpr.trih/2;
        this.xdelta = ((width - 2*this.xstart) / (this.hc-1))/2;
        this.bucketstart =  this.bmpr.trih * (.5+this.bmpr.hmps) + this.bmpr.ystart;
        this.bucketheight =150;
        this.createPegs();
        
        this.createBuckets();
        

    }
    createBuckets(){
        let buckettype1 = {
            nm:'hacked',
            c1 : color('green'),
            c2 : color('red'),
            x:0,
            y:0
            };

            
        let ypos = this.bucketstart;
        let xw = width/this.hc;
        for (let i=0;i<this.hc;i++){
            let xpos =map(i,0,this.hc,0,width);
            
            
            let bucket1 = new Bucket(xpos,ypos,xw,this.bucketheight);

            this.bucketlist.push(bucket1);
            print(bucket1);
        }
    }
    createPegs(){
        let yinc = this.bmpr.trih;
        for (let i=0;i<this.rowpairs;i++){
            let ypos = this.ystart + map(i,0,this.rowpairs,0,this.vc*yinc);
            for (let j=0;j<this.hc;j++)
            {
                let xpos = this.xstart + map(j,0,this.hc-1,0,width-this.xstart*2);
                let thispeg = {x:xpos,y:ypos};
                this.peglist.push(thispeg);
                if (j!=this.hc-1)
                {
                    //adds 2nd, smaller peg row
                    let xpos2 = xpos+this.xdelta;
                    let extrapeg = {x:xpos2,y:ypos + this.ydelta};
                    this.peglist.push(extrapeg);

                }

            }

        }

    }
    show (){
        let offsets = 2;
        for (let i=0;i<this.peglist.length;i++){
            let curpeg = this.peglist[i];
            // fill('black');
            // circle(curpeg.x+offsets,curpeg.y+offsets,this.pegsize);
            fill('yellow');
            circle(curpeg.x,curpeg.y,this.pegsize);

            let x=curpeg.x;
            let y=curpeg.y;
            let w=this.pegsize;
            let hm=3;
            for (let j=0;j<hm;j++)
            {
                noFill();
                strokeWeight(2);
                let botcol =color(map(j,0,hm,20,150),255);
                let topcol = color(map(j,0,hm,150,255),255);
                stroke(botcol);
                arc(x,y,w-j,w-j,-10,170);
                stroke(topcol)
                arc(x,y,w-j,w-j,170,350);
            }

        }
        // print(this.bucketlist);

        // noLoop();
    }
    showbuckets(){
        for (let i=0;i<this.bucketlist.length;i++){
            this.bucketlist[i].show();

        }

    }

}