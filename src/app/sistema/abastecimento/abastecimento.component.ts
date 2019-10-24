import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-abastecimento',
  templateUrl: './abastecimento.component.html',
  styleUrls: ['./abastecimento.component.scss']
})
export class AbastecimentoComponent implements OnInit {

  abastecimentoForm:FormGroup;

  constructor(private formGroup : FormGroup) { }

  ngOnInit() {
  }

}
