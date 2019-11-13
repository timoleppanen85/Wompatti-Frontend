import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
      <h3>404 Page not found</h3>
      <p>Hups, jotain meni vikaan</p>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
