import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcatComponent } from './ecat.component';

describe('EcatComponent', () => {
  let component: EcatComponent;
  let fixture: ComponentFixture<EcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
