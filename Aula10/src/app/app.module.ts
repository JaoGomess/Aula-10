import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastraAlunoComponent } from './cadastra-aluno/cadastra-aluno.component';
import { MenuTopoComponent } from './compartilhado/menu-topo/menu-topo.component';
import { RodapeComponent } from './compartilhado/rodape/rodape.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculaMediaSimplesComponent } from './calcula-media-simples/calcula-media-simples.component';
import { PageNotFoundComponent } from './compartilhado/page-not-found/page-not-found.component';
import { PaiComponent } from './pai/pai.component';
import { Filho1Component } from './pai/filho1/filho1.component';
import { Filho2Component } from './pai/filho2/filho2.component';
import { FormsModule } from '@angular/forms';
import { MediaComponent } from './media/media.component';
import { SeguroComponent } from './seguro/seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastraAlunoComponent,
    MenuTopoComponent,
    RodapeComponent,
    CalculadoraComponent,
    CalculaMediaSimplesComponent,
    PageNotFoundComponent,
    PaiComponent,
    Filho1Component,
    Filho2Component,
    MediaComponent,
    SeguroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
