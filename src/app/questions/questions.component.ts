import {Component, OnInit} from '@angular/core';
import {MatDialog, MatRadioChange} from '@angular/material';
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
  selectedId;
  questionIndex = 0;
  question: any;
  options: any;
  subject: any;
  image: any;
  currentQuestion: any[];
  currentOptions: any[];

  selectedAnswers: any[] = [];
  answers: any[] = [];

  saveQuestions: any[] = [];

  otherAnswer;
  savedOtherAnswers: any[] = [];

  constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
    });
    this.subject = data[this.selectedId].subject;
    this.question = data[this.selectedId].questions[0].question;
    this.options = data[this.selectedId].questions[0].options;
    this.image = data[this.selectedId].img;
  }

  openHint(): void {
    const dialogRef = this.dialog.open(HintDialogComponent, {
      position: {top: '50px', right: '100px'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  showQuestion() {
    this.currentQuestion = data[this.selectedId].questions[this.questionIndex].question;
    if (this.questionIndex === data[this.selectedId].questions[0].question) {
      this.currentQuestion = data[this.selectedId].questions[this.questionIndex].question;
    }
    return this.currentQuestion;
  }

  showOptions() {
    this.currentOptions = data[this.selectedId].questions[this.questionIndex].options;
    if (this.questionIndex === data[this.selectedId].questions[0].options) {
      this.currentQuestion = data[this.selectedId].questions[this.questionIndex].options;
    }
    return this.currentOptions;
  }


  nextQuestion() {
    console.log(this.questionIndex);
    console.log(data[this.selectedId].questions.length);
    this.otherAnswer = (document.getElementById('otherAnswerField') as HTMLInputElement).value;
    this.answers.push(this.selectedAnswers);
    this.savedOtherAnswers.push(this.otherAnswer);
    this.questionIndex++;
    sessionStorage.setItem('questionAnswers', JSON.stringify(this.answers));
    this.selectedAnswers = null;
    sessionStorage.setItem('questionQuestions', JSON.stringify(this.saveQuestions));
    sessionStorage.setItem('otherAnswers', JSON.stringify(this.savedOtherAnswers));
    (document.getElementById('otherAnswerField') as HTMLInputElement).value = '';
    if (this.questionIndex >= data[this.selectedId].questions.length) {
      // return this.currentQuestion;

      console.log(this.savedOtherAnswers);

      this.router.navigate(['/result-data']);
    }
  }

  radioChangeHandler(event: MatRadioChange, thisData) {
    const object = this.showOptions().filter(x => x.options === thisData.options);
  }
}
