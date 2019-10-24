import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.scss']
})
export class ManutencaoComponent implements OnInit {

  manutencaoForm : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
