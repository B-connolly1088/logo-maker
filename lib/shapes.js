class Shape {

    constructor (text, textColor, shapeColor) {

        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    setTextColor(textColorInput) {
        this.textColor = textColorInput
    }

    setText(textInput) {
        this.text = textInput
    }

    setColor(shapeColorInput) {
        this.shapeColor = shapeColorInput
    }

    
}
module.exports = Shape;