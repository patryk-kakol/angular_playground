export class LoggingService {
  counter: number;

  constructor() {
    this.counter = 0;
  }

  incerment() {
    this.counter++;
    console.log(`Operation number: ${this.counter}`);
  }
}
