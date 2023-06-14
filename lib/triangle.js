const Shape = require("./shapes")

class Triangle extends Shape {

    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        const template = `<svg height="500" width="500"><polygon points="250,60 100,400 400, 400" style="fill:${this.shapeColor};stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" /><text x="245" y="295" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text><svg>`

        return template
    }
}


module.exports = Triangle;