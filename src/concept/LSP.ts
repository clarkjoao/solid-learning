// Liskov Substitution Principle
class Animal {
  makeSound() {
    throw new Error("makeSound method must be implemented");
  }
}

class Dog extends Animal {
  makeSound() {
    return "Woof!";
  }
}

class Cat extends Animal {
  makeSound() {
    return "Meow!";
  }
}
// Note:
// In Java and C#, the Liskov Substitution Principle is enforced by the compiler.
// Or using @Override for exemple.
// In TypeScript, it is up to you to ensure that your classes follow the Liskov Substitution Principle.
const makeSounds = (animals: Animal[]) =>
  animals.forEach((animal) => console.log(animal.makeSound()));

const animals = [new Dog(), new Cat()];
makeSounds(animals);
