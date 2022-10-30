import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraAlunoComponent } from './cadastra-aluno.component';

describe('CadastraAlunoComponent', () => {
  let component: CadastraAlunoComponent;
  let fixture: ComponentFixture<CadastraAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
