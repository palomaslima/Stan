import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multas',
  templateUrl: './multas.component.html',
  styleUrls: ['./multas.component.scss']
})
export class MultasComponent implements OnInit {
  multasForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}

