import { Component, OnInit } from '@angular/core';
import { Clue } from '../models/clue';
import { Http } from '@angular/http';
import { JeopardyDataService } from '../jeopardy-data/jeopardy-data.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-jeopardy',
  templateUrl: './jeopardy.component.html',
  styleUrls: ['./jeopardy.component.css'],
  providers: [JeopardyDataService]
})
export class JeopardyComponent implements OnInit {

  clue: Clue;

  nextClue() {
    this.jds
      .getAClue()
      .subscribe(
        clue => this.clue = clue,
        error => console.error(error)
      );
  }

  constructor(private jds: JeopardyDataService) {
    this.clue = new Clue();
  }

  ngOnInit() {
  }

}
