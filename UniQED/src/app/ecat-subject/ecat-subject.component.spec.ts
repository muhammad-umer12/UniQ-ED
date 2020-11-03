import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcatSubjectComponent } from './ecat-subject.component';

describe('EcatSubjectComponent', () => {
  let component: EcatSubjectComponent;
  let fixture: ComponentFixture<EcatSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcatSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcatSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
