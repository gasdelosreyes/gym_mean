import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGimnasioComponent } from './formulario-gimnasio.component';

describe('FormularioGimnasioComponent', () => {
  let component: FormularioGimnasioComponent;
  let fixture: ComponentFixture<FormularioGimnasioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGimnasioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGimnasioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
