import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramofferedComponent } from './programoffered.component';

describe('ProgramofferedComponent', () => {
  let component: ProgramofferedComponent;
  let fixture: ComponentFixture<ProgramofferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramofferedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramofferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
