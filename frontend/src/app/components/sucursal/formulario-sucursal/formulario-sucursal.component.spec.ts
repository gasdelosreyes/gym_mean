import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSucursalComponent } from './formulario-sucursal.component';

describe('FormularioSucursalComponent', () => {
  let component: FormularioSucursalComponent;
  let fixture: ComponentFixture<FormularioSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
