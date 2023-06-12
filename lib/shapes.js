
class Shapes {
    constructor (cx, cy, r) {
this.cx = cx;
this.cy = cy;
this.r  = r;

}

printMetaData(){
    console.log(`created a shape`);
}
}

class Circle extends Shapes{
    constructor(cx, cy ,r) {
    super(cx, cy ,r);
}
}

class Square extends Shapes{
    constructor(cx, cy ,r) {
    super(cx, cy ,r);
}
}

class Triangle extends Shapes{
    constructor(cx, cy ,r) {
    super(cx, cy ,r);
}
}


module.exports = {
    Circle: Circle,
    Square: Square,
    Triangle: Triangle,
  };


