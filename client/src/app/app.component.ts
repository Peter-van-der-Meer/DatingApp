import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { isObservable } from 'rxjs';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    /* ToDo onderstaande fixen */
    //const user: User = JSON.parse(localStorage.getItem('user'));
    //this.accountService.setCurrentUser(user);
  }
}
