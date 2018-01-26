import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeiencesComponent } from './expeiences.component';

describe('ExpeiencesComponent', () => {
  let component: ExpeiencesComponent;
  let fixture: ComponentFixture<ExpeiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
