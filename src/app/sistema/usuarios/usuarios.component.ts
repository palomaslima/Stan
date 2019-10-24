import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuariosForm:FormGroup;
  cadastrosForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
