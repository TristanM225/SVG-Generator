class shape {
    constructor() {
        this.color = ''
    }

    setColor(color) {
        this.color = color
    }
}

function Shapes(cx, cy, r) {
this.cx = cx;
this.cy = cy;
this.r  = r;

this.printMetaData() = function () {
    console.log(`created shape`)
}

}