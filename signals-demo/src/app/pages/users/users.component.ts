import { Component, OnInit } from '@angular/core';
import { UserI, UsersService } from './users.service';
import { filter, pipe } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: UserI[] = [];
  public currentPage = 1;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers(this.currentPage);
  }

  getUsers(page: number) {
    this.currentPage = page;
    this.usersService
      .loadPage(this.currentPage)
      .pipe(filter((users) => users.length > 0))
      .subscribe({
        next: (users) => (this.users = users),
      });
  }
}
