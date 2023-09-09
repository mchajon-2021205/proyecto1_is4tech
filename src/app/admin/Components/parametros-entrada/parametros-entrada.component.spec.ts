import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosEntradaComponent } from './parametros-entrada.component';

describe('ParametrosEntradaComponent', () => {
  let component: ParametrosEntradaComponent;
  let fixture: ComponentFixture<ParametrosEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametrosEntradaComponent]
    });
    fixture = TestBed.createComponent(ParametrosEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
