const inquirer = require('inquirer'); // including inquirer
const fs = require('fs');

const { Circle, Square, Triangle } = require('./lib/shapes.js');

const generateSVG = ({ shape, color, letters, letterColor }) => {
  //if in the prompt we pick circle it will render circle here
  if (shape === 'Circle') {
    const circle = new Circle();
    circle.setColor(color);
    circle.setLetters(letters);
    circle.setLetterColor(letterColor);
    return circle.render();
    //if in the prompt we pick square it will render square here
  } else if (shape === 'Square') {
    const square = new Square();
    square.setColor(color);
    square.setLetters(letters);
    square.setLetterColor(letterColor);
    return square.render();
    //if in the prompt we pick Triangle it will render Triangle here
  } else if (shape === 'Triangle') {
    const triangle = new Triangle();
    triangle.setColor(color);
    triangle.setLetters(letters);
    triangle.setLetterColor(letterColor);
    return triangle.render();
  }
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'letterColor',
      message: 'Enter text color',
    },
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
      message: 'Choose a color',
    },

  ])
  .then((answers) => {
    const svgImageContent = generateSVG(answers);
// takes the answers and makes them into a SVG image file.  
    fs.writeFile('logo.svg', svgImageContent, (err) =>
      err ? console.log(err) : console.log('Generated logo.svg!')
    );
  });
