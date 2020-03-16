import { AppError } from '@am/core';

import { logger } from '../../shared/logger';

export interface User {
  id?: number;
  name: string;
  email: string;
}

// This serves as an example of a database that stores users in memory
const users: User[] = [
  { id: 1, name: 'Rick Sanchez', email: 'rick.sanchez@earth-c137.com' },
  { id: 2, name: 'Morty Smith', email: 'morty.smith@earth-c137.com' },
  { id: 3, name: 'Jerry Smith', email: 'jerry.smith@earth-c137.com' },
  { id: 4, name: 'Summer Smith', email: 'summer.smith@earth-c137.com' },
  { id: 5, name: 'Squanchy', email: 'squanchy@earth-c137.com' },
  { id: 6, name: 'Mr. Meeseeks', email: 'mr.meeseeks@earth-c137.com' },
  { id: 7, name: 'Bird Person', email: 'bird.person@earth-c137.com' },
  { id: 8, name: 'Mr. Poopybutthole', email: 'mr.poopybutthole@earth-c137.com' },
];

class UserService {
  // Here you can create an axios instance to make HTTP requests to remote APIs
  // private http = axios.create({ ... });

  getUsers() {
    logger.info('Fetching all users');
    return Promise.resolve(users);
  }

  createUser(user: User) {
    logger.info({ user }, 'Creating a new user');
    return new Promise(resolve => {
      setTimeout(() => {
        const newUser = { id: users.length + 1, ...user };
        users.push(newUser);
        resolve(newUser);
      }, 1000);
    });
  }

  getUser(userId: string) {
    logger.info({ userId }, 'Fetching user');
    return new Promise((resolve, reject) => {
      const user = users.find(u => u.id === parseInt(userId, 10));
      if (user) {
        resolve(user);
      } else {
        reject(new AppError(`Could not find user with id ${userId}`, 404, true));
      }
    });
  }
}

export default new UserService();
