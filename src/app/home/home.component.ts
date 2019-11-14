import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {QuestionSetsComponent} from '../question-sets/question-sets.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginAdmin() {
    this.router.navigate(['/login']);
  }

  anonymousUser() {
    this.router.navigate(['/question-sets']);
  }
}
