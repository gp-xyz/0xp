class BG{
    constructor(){

    }
    show(){
        fill('grey');
        
        for (let i=0;i<height;i++){
            let newcolor = lerpColor(color('black'),color('white'),i/height);
            stroke(newcolor);
            line(0,i,width,i);

        }
    }
}