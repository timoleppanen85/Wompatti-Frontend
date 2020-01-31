import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {HintDialogComponent} from '../hint-dialog/hint-dialog.component';

// @ts-ignore
import data from '../../data.json';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public selectedId;
  question: any; // = data[0].questions[0].question;
  answer: any; // = data[0].questions[0].options;

  constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
    });
    this.question = data[this.selectedId].questions[0].question;
    this.answer = data[this.selectedId].questions[0].options;
  }

  openHint(): void {
    const dialogRef = this.dialog.open(HintDialogComponent, {
      position: {top: '50px', right: '100px'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  nextQuestion() {
    // TODO for statement iterating through questions and saving results.
    const currentQuestion: any = data[this.selectedId].questions[0].question;
    console.log(currentQuestion);
    for (let i = 0; i < currentQuestion.length; i++) {
      console.log(i);
      if (i === +1) {
        console.log(i);
        this.question = data[this.selectedId].questions[i].question;
        return;
      }
    }
  }

// this.question = data[this.selectedId].questions[i].question;
// if (currentQuestion === currentQuestion.length) {
// console.log(currentQuestion.length);
// this.router.navigate(['/result-data']);


}
