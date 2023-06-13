const inquirer = require('inquirer');
const fs = require('fs');

const { Circle, Square, Triangle } = require('./lib/shapes.js');

const generateSVG = ({ cx, cy, r, shape, color, letters }) => {
  if (shape === 'Circle') {
    const circle = new Circle(cx, cy, r);
    circle.setColor(color);
    circle.setLetters(letters);
    return circle.render();
  } else if (shape === 'Square') {
    const square = new Square(cx, cy, r);
    square.setColor(color);
    square.setLetters(letters);
    return square.render();
  } else if (shape === 'Triangle') {
    const triangle = new Triangle(cx, cy, r);
    triangle.setColor(color);
    triangle.setLetters(letters);
    return triangle.render();
  }
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'letters',
      message: 'Enter three characters',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape',
      choices: ['Square', 'Triangle', 'Circle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Choose a color (any!)',
    },
    {
      type: 'input',
      name: 'cx',
      message: 'Enter the cx value',
    },
    {
      type: 'input',
      name: 'cy',
      message: 'Enter the cy value',
    },
    {
      type: 'input',
      name: 'r',
      message: 'Enter the r value',
    },
  ])
  .then((answers) => {
    const svgImageContent = generateSVG(answers);

    fs.writeFile('logo.svg', svgImageContent, (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
  });
