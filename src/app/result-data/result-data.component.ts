import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-data',
  templateUrl: './result-data.component.html',
  styleUrls: ['./result-data.component.css']
})
export class ResultDataComponent implements OnInit {

  constructor() { }

  savedAnswers;
  savedQuestions;
  jsonAnswers = [];
  jsonQuestions = [];

  ngOnInit() {

    this.savedAnswers = window.sessionStorage.getItem('questionAnswers');
    this.jsonAnswers = JSON.parse(this.savedAnswers);
    this.savedQuestions = window.sessionStorage.getItem('questionQuestions');
    this.jsonQuestions = JSON.parse(this.savedQuestions);

  // this.formatResult();

  }

  generatePdf() {
    console.log(this.jsonQuestions);
    console.log(this.jsonAnswers)
    console.log(sessionStorage);
  }

  // formatResult() {
    // tslint:disable-next-line:prefer-for-of
    // for (let i = 0; i < this.test.length; i++) {
    //  document.getElementById('resultBox').innerHTML = this.test[i];
 // }
  // }

  tulokset() {

  }

  showQuestion() {
  }
}
