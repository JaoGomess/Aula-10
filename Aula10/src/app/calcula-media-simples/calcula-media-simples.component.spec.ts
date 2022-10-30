import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaMediaSimplesComponent } from './calcula-media-simples.component';

describe('CalculaMediaSimplesComponent', () => {
  let component: CalculaMediaSimplesComponent;
  let fixture: ComponentFixture<CalculaMediaSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculaMediaSimplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculaMediaSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
