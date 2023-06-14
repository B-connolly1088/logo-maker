const Shape = require("./shapes")

class Square extends Shape {

    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    

    render() {
        const template = `<svg width="400" height="180"><rect x="50" y="20" width="150" height="150"style="fill:${this.shapeColor};stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" /><text x="125" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`

        return template
    }
}
module.exports = Square;