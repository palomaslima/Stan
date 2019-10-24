import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.scss']
})
export class ViagemComponent implements OnInit {
  viagemForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
