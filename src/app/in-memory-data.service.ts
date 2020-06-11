import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// Import des Interfaces de l'application
import { User } from './interfaces/user.ifc';
import { Safe } from './interfaces/safe.ifc';

// Import des MOCKS
import { USERS } from './mocks/users.mck';
import { SAFES } from './mocks/safes.mck';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = USERS;
    const safes = SAFES;

    return {users, safes};
  }

  genUserId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }

  genSafeId(safes: Safe[]): number {
    return safes.length > 0 ? Math.max(...safes.map(safe => safe.id)) + 1 : 11;
  }
  
}
