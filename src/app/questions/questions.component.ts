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
  selectedId;
  questionIndex = 0;
  question: any;
  options: any;
  subject: any;
  image: any;
  currentQuestion: any[];
  currentOptions: any[] = this.options;

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
    this.currentOptions = data[this.selectedId].questions[this.questionIndex].question.options;
    if (this.questionIndex === data[this.selectedId].questions[0].options[this.questionIndex]) {
      this.currentQuestion = data[this.selectedId].questions[this.questionIndex].options[this.questionIndex];
    }
    return this.currentOptions;
  }

  nextQuestion() {
    console.log(this.questionIndex);
    console.log(data[this.selectedId].questions.length);
    if (this.questionIndex <= data[this.selectedId].questions.length) {
      this.questionIndex++;
    } else {
      this.router.navigate(['/result-data']);
    }
    return this.currentQuestion;
  }

}


//     do {
//       for (let = 0;
//
//       i < this
//
//         .currentQuestion;
//     .
//       length;
//       ++
//     )
//       {
//         console;
//       .
//
//         log(i);
//
//         if (i
//
//           ===
//           1{
//           ;
//         }
//       )
//         {
//           console;
//         .
//
//           log(i);
//
//           this;
//         .
//           question = data[this.selectedId].questions[i].question;
//           return;
//         }
//       }
//     }
//     while (currentQuestion === currentQuestion.length);
//     {
//       ;
//     }
//     if (currentQuestion === currentQuestion.length) {
//       this.router.navigate(['/result-data']);
//     }
//   }
//
// //   for (let j = 0; j < currentQuestion.length; j++) {
// //     if (j === 2) {
// //       this.question = data[this.selectedId].questions[i].question;
// //     }
// //   }
// //   if (i === currentQuestion.length) {
// //     this.router.navigate(['/result-data']);
// //   }
// // }
//
// // this.question = data[this.selectedId].questions[i].question;
// // if (currentQuestion === currentQuestion.length) {
// // console.log(currentQuestion.length);
// this.router.navigate(['/result-data']);
