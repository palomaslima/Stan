import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sinistros',
  templateUrl: './sinistros.component.html',
  styleUrls: ['./sinistros.component.scss']
})
export class SinistrosComponent implements OnInit {
  sinistrosForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
