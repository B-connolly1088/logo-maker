const Shapes = require('./shapes');
const Square = require('./square');
const Triangle = require('./triangle');
const Circle = require('./circle');

describe('Shapes', () => {

    describe('shape class test', () => {
        it('setTextColor', () => {
            const color = 'blue';
            const shape = new Shapes('svg', 'green', 'black');
            shape.setTextColor(color)
            expect(shape.textColor).toEqual(color);
        });

        it('setText', () => {
            const text = 'blu';
            const shape = new Shapes('svg', 'green', 'black');
            shape.setText(text)
            expect(shape.text).toEqual(text);
        });

        it('setColor', () => {
            const color = 'blue';
            const shape = new Shapes('svg', 'green', 'black');
            shape.setColor(color)
            expect(shape.shapeColor).toEqual(color);
        });

    })

    describe('square', () => {
        it('render', () => {
            const shapeColor = 'blue';
            const text = 'svg';
            const textColor = 'black';
            const template = `<svg width="400" height="180"><rect x="50" y="20" width="150" height="150"style="fill:${shapeColor};stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" /><text x="125" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
            const square = new Square(text, textColor, shapeColor);
            expect(square.render()).toEqual(template);
        });


    })


    describe('triangle', () => {
        it('render', () => {
            const shapeColor = 'blue';
            const text = 'svg';
            const textColor = 'black';
            const template = `<svg height="500" width="500"><polygon points="250,60 100,400 400, 400" style="fill:${shapeColor};stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" /><text x="245" y="295" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text><svg>`
            const triangle = new Triangle(text, textColor, shapeColor);
            expect(triangle.render()).toEqual(template);
        });


    })

    describe('circle', () => {
        it('render', () => {
            const shapeColor = 'blue';
            const text = 'svg';
            const textColor = 'black';
            const template = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org 2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
            const circle = new Circle(text, textColor, shapeColor);
            expect(circle.render()).toEqual(template);
        });


    })



})