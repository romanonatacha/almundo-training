import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../../server/api/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = '/test/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.url}`)
      .pipe(catchError(error => throwError(error)));
  }

  getFilters(data: User[], name: string): User[] {
    return data.filter(data => data.name === name);
  }
}
