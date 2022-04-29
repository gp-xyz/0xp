class Bumpers{
    constructor(){
        this.bumperlist = [];
        this.trih = 80; //bbumper height
        this.pointh = 30;  //bumper point
        this.ystart =150; //topmargin
        this.hmps = 4; //bumpers per side
        this.c = color('orange'); 
        this.PPL = 10; //bumper points per line


        this.peglist = [];

        for (let i=0;i<this.hmps;i++){
            let leftbump = {x:0,y:this.ystart+i*this.trih,o:'left'};
            let rightbump = {x:width,y:this.ystart+i*this.trih,o:'right'};
            this.bumperlist.push(leftbump);
            this.bumperlist.push(rightbump);
            this.yfin= this.ystart+i*this.trih+this.trih/2;

            //each triangle has 2 lines of points
            for (let k=0;k<this.PPL;k++){
                let newx1 =map(k,0,this.PPL-1,0,this.pointh);
                let newy1=this.ystart+i*this.trih + map(k,0,this.PPL-1,0,this.trih/2);
                let newy2=this.ystart+(1+i)*this.trih - map(k,0,this.PPL-1,0,this.trih/2);
                let newpegspotL1 = createVector(newx1,newy1);
                let newpegspotR1 = createVector(width-newx1,newy1);
                //top triangle pegs
                this.peglist.push(newpegspotL1);
                this.peglist.push(newpegspotR1);

                let newpegspotL2 = createVector(newx1,newy2);
                let newpegspotR2 = createVector(width-newx1,newy2);
                //top triangle pegs
                this.peglist.push(newpegspotL2);
                this.peglist.push(newpegspotR2);

            }
        }

    }
    show (){
        noStroke();
        let offset =2;
        for (let i=0;i<this.bumperlist.length;i++){
            let curbump = this.bumperlist[i];
            if (curbump.o == 'left'){
                fill('black');
                triangle(curbump.x,curbump.y,
                    curbump.x+offset,curbump.y+this.trih+offset,
                    curbump.x+this.pointh+offset,curbump.y+this.trih/2+offset);
                
                fill('white');
                triangle(curbump.x,curbump.y-offset,
                    curbump.x,curbump.y+this.trih-offset,
                    curbump.x+this.pointh,curbump.y+this.trih/2-offset);
                
                fill(this.c);
                triangle(curbump.x,curbump.y,
                    curbump.x,curbump.y+this.trih,
                    curbump.x+this.pointh,curbump.y+this.trih/2);
            }
            else{
                fill('white');
                triangle(curbump.x,curbump.y-offset,
                    curbump.x,curbump.y+this.trih-offset,
                    curbump.x-this.pointh,curbump.y+this.trih/2-offset);

                    fill('black');
                    triangle(curbump.x,curbump.y+offset,
                        curbump.x,curbump.y+this.trih+offset,
                        curbump.x-this.pointh,curbump.y+this.trih/2+offset);

                fill(this.c);
                triangle(curbump.x,curbump.y,
                    curbump.x,curbump.y+this.trih,
                    curbump.x-this.pointh,curbump.y+this.trih/2);



            }
            
        }

        //show pegs that help it bounce
        // for (let i=0;i<this.peglist.length;i++){
        //     let thispeg = this.peglist[i];
        //     fill('red');
        //     circle(thispeg.x,thispeg.y,5);
        // }
    }

}