import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserI, UsersService } from '../users/users.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-users-signals',
  templateUrl: './users-signals.component.html',
  styleUrls: ['./users-signals.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class UsersSignalsComponent {
  public users = signal<UserI[]>([]);
  public currentPage = signal(1);
  private usersService = inject(UsersService);
  public totalUsers = computed(() => this.users().length);

  constructor() {
    this.getUsers(this.currentPage());
  }

  getUsers(page: number) {
    this.usersService
      .loadPage(page)
      .pipe(filter((users) => users.length > 0))
      .subscribe({
        next: (users) => {
          this.users.update((currentUsers) => [...currentUsers, ...users]);
          this.currentPage.set(page);
        },
      });
  }
}
