import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent implements OnInit {

  nome: String;
  sexo: String;
  idade: Number;
  valorcar: Number;
  apolice: any;

  estiloInput: String;
  estiloBotao: String;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.estiloInput = "form-control";
    this.estiloBotao = "btn btn-primary";
    this.nome = this.route.snapshot.params['nome'];
    this.sexo =  this.route.snapshot.params['sexo'];
    this.idade = this.route.snapshot.params['idade'] ? this.route.snapshot.params['idade'] : null;
    this.valorcar = this.route.snapshot.params['valorcar'] ? this.route.snapshot.params['valorcar'] : null;
    
  }

  calcular() {
    switch (this.sexo) {
      case "M":
        if (this.idade > 25) {
          this.apolice = `Nome: ${this.nome}\nApolice: ${this.porcentagem(10, this.valorcar)}`;
        } else if (this.idade <= 25) {
          this.apolice = `Nome: ${this.nome}\nApolice: ${this.porcentagem(15, this.valorcar)}`;
        }
      break;
      case "F":
        this.apolice = `Nome: ${this.nome}\nApolice: ${this.porcentagem(8, this.valorcar)}`;
      break;
    }
  }

  porcentagem(apolice, valueCar) {
    return (valueCar *100) / apolice
  }

}
