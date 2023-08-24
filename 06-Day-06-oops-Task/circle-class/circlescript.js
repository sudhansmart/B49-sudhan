//2.Convert the UML diagram to Typescript class. - use number for double
class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    toString(radius = this.radius) {
        this.radius = radius;
        return `after converting to string ${(this.radius).toString()+(this.color).toString()}`
    }
    circle() {
        return `color is ${this.color} and radius is ${this.radius}`;
    }
    circle(radius) {
        this.radius = radius;
        return `radius is ${this.radius}`;
    }
    circle(radius, color) {
        this.radius = radius;
        this.color = color;
        return `the radius is ${this.radius} and color is ${this.color}`;
    }
    setRadius(radius = 1.0) {
        this.radius = radius;
    }
    getRadius() {
        return `the radius by get and set is ${this.radius}`;
    }
    setColor(color = "red") {
        this.color = color;
    }
    getColor() {
        return `the color by get and set is ${this.color}`;
    }
    getArea() {
        return `the area is ${(this.radius)*(this.radius)*4}`;
    }
    getCircumference() {
        return `the circumference is ${(this.radius)+(Math.PI)}`;
    }
}
let cir = new Circle(6, "Green");
console.log(cir);
console.log(cir.circle());
console.log(cir.circle(5));
console.log(cir.circle(4, "white"));
console.log(cir.getRadius());
cir.setColor();
console.log(cir.getColor());
console.log(cir.toString(6));
cir.setRadius();
console.log(cir.getArea());
console.log(cir.getCircumference());



