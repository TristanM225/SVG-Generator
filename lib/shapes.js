
class Shapes {
    constructor() {
        this.color = '';
        this.letters = '';

    }

    setColor(color) {
        this.color = color;
    }
    setLetters(letters) {
        this.letters = letters;
    }
}

class Circle extends Shapes {
    constructor(color, letters) {
        super(color, letters); }
        render() {
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

<circle cx="150" cy="100" r="80" fill="${this.color}"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.letters}</text>

</svg>`
        }

    
}

class Square extends Shapes {
    constructor(color, letters) {
        super(color, letters); }
        render() {
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            
            <rect x="10" y="10" width="30" height="30"  fill="${this.color}" />
            
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.letters}</text>
            
            </svg>`
    }
}

class Triangle extends Shapes {
    constructor(cx, cy, r) {
        super(cx, cy, r);}
        render() {
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>
         
         
           <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.letters}</text>
         
         </svg>`
    }
}


module.exports = {
    Circle: Circle,
    Square: Square,
    Triangle: Triangle,
};


