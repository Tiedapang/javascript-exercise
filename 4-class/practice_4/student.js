import Person from './person';

export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const result = `${this.basicIntroduce()} I am a Student. I am at Class ${this.klass}.`;
    return result;
  }
}
