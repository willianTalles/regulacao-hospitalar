import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarLeitoUtiComponent } from './solicitar-leito-uti.component';

describe('SolicitarLeitoUtiComponent', () => {
  let component: SolicitarLeitoUtiComponent;
  let fixture: ComponentFixture<SolicitarLeitoUtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarLeitoUtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarLeitoUtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
