import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McatSubjectComponent } from './mcat-subject.component';

describe('McatSubjectComponent', () => {
  let component: McatSubjectComponent;
  let fixture: ComponentFixture<McatSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McatSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McatSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
