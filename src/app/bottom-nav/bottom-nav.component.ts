import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  results() {
    this.router.navigate(['/result-data']);
  }

}
