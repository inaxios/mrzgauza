import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./service/user-service.service";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend gauza';
  users: User[];

  constructor(private router: Router, private userService: UserService) {
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser(): void {
    this.router.navigate(['add-users'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getUsers();
    });
  }
}
