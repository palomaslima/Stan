import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {
  veiculosForm:FormGroup;
  veiculosAlterarForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

 abrirCollapse(){
  document.getElementById("collapseTwo").className = "collapsed";

  
 }

}
