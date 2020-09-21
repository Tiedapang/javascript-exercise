import Person from './person';

export default class Worker extends Person {
  introduce() {
    const result = `${this.basicIntroduce()} I am a Worker. I have a job.`;
    return result;
  }
}
