import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.scss']
})
export class MotoristasComponent implements OnInit {
  motoristaForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
