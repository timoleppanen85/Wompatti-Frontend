import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {getHtmlTagDefinition} from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Output() public header = new EventEmitter<string>();

  getSubject(subject) {
    const subjectName = subject;
    subjectName.
  }

  ngOnInit() {
  }

}
