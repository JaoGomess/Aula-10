import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  num1: number;
  num2: number;
  resultado: number;
  estiloInput: String;
  estiloBotao: String;
  constructor(public route: ActivatedRoute) { 
    this.estiloInput = "form-control";
    this.estiloBotao = "btn btn-primary";
  }

  ngOnInit(): void {
    this.num1 =  this.route.snapshot.params['num1'] ? parseFloat(this.route.snapshot.params['num1']) : 0;
    this.num2 = this.route.snapshot.params['num2'] ? parseFloat(this.route.snapshot.params['num2']) : 0;
  }


  somar(){
    this.resultado = this.num1 + this.num2;
  }

  subtracao() {
    this.resultado = this.num1 - this.num2; 
  }

  multiplicacao() {
    this.resultado = this.num1 * this.num2;
  }

  divisao() {
    this.resultado = this.num1 / this.num2;
  }

}
