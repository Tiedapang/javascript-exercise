import Person from './person';

export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const result = `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
    return result;
  }
}
