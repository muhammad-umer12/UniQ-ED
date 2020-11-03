import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcatSubjectComponent } from './bcat-subject.component';

describe('BcatSubjectComponent', () => {
  let component: BcatSubjectComponent;
  let fixture: ComponentFixture<BcatSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcatSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcatSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
