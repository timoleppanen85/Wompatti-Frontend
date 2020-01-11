import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {HintDialogComponent} from '../hint-dialog/hint-dialog.component';
import * as data from '../../data.json';
import {Router} from '@angular/router';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() public resultSubject: string;
  questionSetHeader: any[] = data;
  questiones: any[] = data;

  questionHeader: any = data[0].subject1;
  question: any = data[0].perheJaLäheiset1.question;

  constructor(public dialog: MatDialog, private router: Router, private menuComponent: MenuComponent) {
  }

  ngOnInit() {
    console.log(data);
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
    this.router.navigate(['/result-data']);
  }

  showHeader() {
    if (this.resultSubject === this.questionHeader) {
      this.questionHeader = data[0].subject1;
    }
  }
}
