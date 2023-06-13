const inquirer = require('inquirer');

const { Circle, Square, Triangle } = require('./lib/shapes.js');

const myCircle = new Circle(0, 0, 5);
const mySquare = new Square(0, 0, 10);
const myTriangle = new Triangle(0, 0, 8);

console.log(myCircle);
console.log(mySquare);
console.log(myTriangle);

inquirer
.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter three characters',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ["Square", "Triangle", "Circle"],
      },
      {
        type: 'input',
        name: 'color',
        message: 'Choose a color (any!)',
      },

])