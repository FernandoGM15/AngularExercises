import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
export interface ResponseI {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserI[];
  support: {
    url: string;
    text: string;
  };
}

export interface UserI {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  loadPage(page: number): Observable<UserI[]> {
    return this.http
      .get<ResponseI>(this.url, { params: { page } })
      .pipe(map((response: ResponseI) => response.data));
  }
}
