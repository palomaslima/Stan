import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quilometragem',
  templateUrl: './quilometragem.component.html',
  styleUrls: ['./quilometragem.component.scss']
})
export class QuilometragemComponent implements OnInit {
  quilometragemForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
