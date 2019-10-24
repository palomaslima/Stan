import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pneus',
  templateUrl: './pneus.component.html',
  styleUrls: ['./pneus.component.scss']
})
export class PneusComponent implements OnInit {
  pneusForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
