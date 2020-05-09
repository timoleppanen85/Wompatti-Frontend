import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-result-data',
  templateUrl: './result-data.component.html',
  styleUrls: ['./result-data.component.css']
})
export class ResultDataComponent implements OnInit {

  constructor() {}

  savedAnswers;
  savedQuestions;
  savedOther;
  jsonAnswers = [];
  jsonQuestions = [];
  jsonOther = [];
  combined = [];


  ngOnInit() {

    this.savedAnswers = window.sessionStorage.getItem('questionAnswers');
    this.jsonAnswers = JSON.parse(this.savedAnswers);
    this.savedQuestions = window.sessionStorage.getItem('questionQuestions');
    this.jsonQuestions = JSON.parse(this.savedQuestions);
    this.savedOther = window.sessionStorage.getItem('otherAnswers');
    this.jsonOther = JSON.parse(this.savedOther);
    this.combined.push(this.jsonOther, this.jsonAnswers, this.jsonQuestions);

  // this.formatResult();

  }

  generatePdf() {
    window.print();
  }
}
