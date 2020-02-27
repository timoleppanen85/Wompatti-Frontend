import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-data',
  templateUrl: './result-data.component.html',
  styleUrls: ['./result-data.component.css']
})
export class ResultDataComponent implements OnInit {
  private answers: string;
  item = JSON.parse(sessionStorage.getItem(this.answers));

  constructor() { }

  ngOnInit() {

  }
}
