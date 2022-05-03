import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  id: string;
  name: string;
  location: string;
  bio: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: 'Josh',
      location: 'Adelaide',
      bio: 'Subscribe for more videos on Angular!',
    },
    {
      id: '2',
      name: 'Bran',
      location: 'Winterfell',
      bio: 'I like to travel',
    },
    {
      id: '3',
      name: 'Daenerys',
      location: 'Kings Landing',
      bio: 'Mother of dragons etc. etc. ',
    },
  ];

  constructor() {}

  // Simulate loading from API
  getUsers() {
    return of(this.users).pipe(delay(500));
  }

  getUser(id: string) {
    return of(this.users.find((user) => user.id === id)).pipe(delay(500));
  }
}
