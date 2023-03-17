// Open Close Principle

// The Shape class is open to extension but closed to modification.
class Shape {
  area() {
    throw new Error("Area method must be implemented");
  }
}

// This means that it is possible to create new shapes derived from Shape, without having to change the Shape class.
// Like Circle and Rectangle
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shapes: number[] = [new Circle(2), new Rectangle(2, 3)].map((shape) =>
  shape.area()
);
