const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([

    {
        type: 'input',
        message: 'What color would you like your shape to be?',
        name: 'shapeColor',
    },
    {
        type: 'input',
        message: 'What color would you like your text to be?',
        name: 'textColor',
    },
    {
        type: 'input',
        message: 'What would you like your initials to be(3 letters only)?',
        name: 'text',
    },
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        name: 'shape',
        choices: ['triangle', 'circle', 'square'],
    },


]).then (function(response) {
    render(template);




    fs.writeFile('logo.svg', template, (error) => {
        if (error) {
            console.log(error);
        }
    })
})