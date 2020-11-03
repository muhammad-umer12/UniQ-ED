import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherrecordComponent } from './teacherrecord.component';

describe('TeacherrecordComponent', () => {
  let component: TeacherrecordComponent;
  let fixture: ComponentFixture<TeacherrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
