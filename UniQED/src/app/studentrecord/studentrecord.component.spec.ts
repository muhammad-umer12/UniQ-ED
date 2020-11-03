import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrecordComponent } from './studentrecord.component';

describe('StudentrecordComponent', () => {
  let component: StudentrecordComponent;
  let fixture: ComponentFixture<StudentrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
