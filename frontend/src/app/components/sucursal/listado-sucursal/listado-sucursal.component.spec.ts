import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSucursalComponent } from './listado-sucursal.component';

describe('ListadoSucursalComponent', () => {
  let component: ListadoSucursalComponent;
  let fixture: ComponentFixture<ListadoSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
