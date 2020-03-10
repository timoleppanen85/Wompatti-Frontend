import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-data',
  templateUrl: './result-data.component.html',
  styleUrls: ['./result-data.component.css']
})
export class ResultDataComponent implements OnInit {

  constructor() { }

  items = window.sessionStorage.getItem('questionAnswers');
  test = JSON.parse(this.items)

  ngOnInit() {

  document.getElementById('resultBox').innerHTML = this.test;
  // this.formatResult();

  }

  generatePdf() {

    console.log(sessionStorage);
  }

  formatResult() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.test.length; i++) {
      document.getElementById('resultBox').innerHTML = this.test[i];
    }
  }

  tulokset() {

  }

  showQuestion() {
  }
}
