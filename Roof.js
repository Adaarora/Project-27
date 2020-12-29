class Roof {

    constructor(x, y, width,height) {
        var options = {
            isStatic: true,
            
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world, this.body);

    }
    display()
    {
        var paperpos=this.body.position;

        push()
        rectMode(CENTER);
        translate(paperpos.x, paperpos.y);
        strokeWeight(3);
        fill("black")
        rect(0,0,this.width, this.height);
        pop()

    }
    
}