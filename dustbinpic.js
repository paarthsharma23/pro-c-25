class dustBin2 {
    constructor(width,height){
    this.width = width;
    this.height = height;
    this.imag = loadImage("dustbingreen.png");
    //this.body = Bodies.rectangle(x,y,this.width,this.height,{'isStatic':true});
    //World.add(world,this.body);
    }
    
    display(){
        push();
    //var pos = this.body.position;
    //translate(pos.x-5,pos.y-25);
    imageMode(CENTER);
    image(this.imag,1100-5,365-25,this.width,this.height);    
    pop();    
}

    };