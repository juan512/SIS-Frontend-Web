import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisPacientesComponent } from './lis-pacientes.component';

describe('LisPacientesComponent', () => {
  let component: LisPacientesComponent;
  let fixture: ComponentFixture<LisPacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisPacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
