import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  valorAc1: number;
  valorAc2: number;
  valorAg: number;
  valorAf: number;
  valorMedia: number;
  resultado: String;
  estiloInput: String;
  estiloBotao: String;

  constructor(public route: ActivatedRoute) { 
    this.estiloInput = "form-control";
    this.estiloBotao = "btn btn-primary";
  }

  ngOnInit(): void {
    this.valorAc1 = this.route.snapshot.params['valorAc1'] ?parseFloat(this.route.snapshot.params['valorAc1']) : 0;
    this.valorAc2 = this.route.snapshot.params['valorAc2'] ?parseFloat(this.route.snapshot.params['valorAc2']) : 0;
    this.valorAg = this.route.snapshot.params['valorAg'] ?parseFloat(this.route.snapshot.params['valorAg']) : 0;
    this.valorAf = this.route.snapshot.params['valorAf'] ?parseFloat(this.route.snapshot.params['valorAf']) : 0;
  }


  calcularMedia() {
    this.valorMedia =  (this.valorAc1 * 0.15) + (this.valorAc2 * 0.30) + (this.valorAg *  0.10) + (this.valorAf * 0.45);
    if (this.valorMedia > 5) this.resultado = "Aprovado";
      else this.resultado = "Reprovado";
  }

}
