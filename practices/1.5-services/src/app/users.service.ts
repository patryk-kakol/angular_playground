import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private loggingService: LoggingService) {}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.loggingService.incerment();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.loggingService.incerment();
  }
}
