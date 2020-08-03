import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGimnasioComponent } from './listado-gimnasio.component';

describe('ListadoGimnasioComponent', () => {
  let component: ListadoGimnasioComponent;
  let fixture: ComponentFixture<ListadoGimnasioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoGimnasioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoGimnasioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
