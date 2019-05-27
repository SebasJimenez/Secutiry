import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/model/Data.model';

@Component({
  selector: 'app-screen-log',
  templateUrl: './screen-log.component.html',
  styleUrls: ['./screen-log.component.css']
})
export class ScreenLogComponent implements OnInit {

  datas: Array<Data>;

  constructor() { }

  ngOnInit() {
  }

}
