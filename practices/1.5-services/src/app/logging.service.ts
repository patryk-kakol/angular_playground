export class LoggingService {
  inactiveToActiveCounter = 0;
  activeToInactiveCounter = 0;

  log() {
    console.log(`Inactive to active: ${this.inactiveToActiveCounter} | Active to inactive: ${this.activeToInactiveCounter}`);
  }

  incermentInactiveToActive() {
    this.inactiveToActiveCounter++;
    this.log();
  }

  incermentActivetoInactive() {
    this.activeToInactiveCounter++;
    this.log();
  }

}
