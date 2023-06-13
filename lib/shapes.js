// making shapes the parent to circle traiangle and square
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
    setLetterColor(letterColor) {
        this.letterColor = letterColor;
    }
}

class Circle extends Shapes { // circle is adopting properties from Shapes
    constructor(color, letters) {
        super(color, letters); }
        render() {
            // creating the SVG file for circle 
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

<circle cx="150" cy="100" r="80" fill="${this.color}"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.letterColor}">${this.letters}</text>

</svg>`
        }

    
}

class Square extends Shapes {
    constructor(color, letters) {
        super(color, letters); }
        render() {
            // creating the SVG file for Square
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            
            <rect x="10" y="10" width="200px" height="200px"  fill="${this.color}" />
            
            <text x="110" y="125" font-size="60" text-anchor="middle" fill="${this.letterColor}">${this.letters}</text>
            
            </svg>`
    }
}

class Triangle extends Shapes {
    constructor(color, letters) {
        super(color, letters); }
        render() {
            // creating the SVG file for Triangle
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <polygon points="100 0, 200 200, 0 200" fill="${this.color}"/>
         
         
            <text x="100" y="150" font-size="60" text-anchor="middle" fill="${this.letterColor}">${this.letters}</text>
         
         </svg>`
    }
}


module.exports = {
    Circle: Circle,
    Square: Square,
    Triangle: Triangle,
};


