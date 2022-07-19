import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../pleasecore/models/user';
import { UserService } from '../../pleasecore/services/user.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  loading = false;
  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        console.log('users :>> ', users);
        this.loading = false;
        this.users = users;
      });

    console.log('testing testing');
  }
}
