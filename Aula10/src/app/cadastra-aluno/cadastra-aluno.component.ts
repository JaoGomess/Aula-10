import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-cadastra-aluno',
  templateUrl: './cadastra-aluno.component.html',
  styleUrls: ['./cadastra-aluno.component.css']
})
export class CadastraAlunoComponent implements OnInit {

  @Input() num1 : number=3;
  @Output() num1Change = new EventEmitter<number>();
  inativo : boolean = false;
  estiloBotao: String;
  estiloInput: String;


  nome: String;
  email: String;
  telefone: String;
  ra: String;
  resultado: String;

  constructor() {
    this.estiloInput = "form-control "
    this.estiloBotao = "btn btn-primary"

  }

  ngOnInit(): void {    
  }


  mudarValorNum1(){
    this.num1 = this.num1 * 2;
    this.num1Change.emit(this.num1);
  }

  cadastro() {
    this.resultado = this.nome + '\n Email: ' + this.email + '\n Telefone: ' + this.telefone + '\n Ra:' + this.ra + '\n'
  }

}
