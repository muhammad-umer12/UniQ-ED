import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KylsloginComponent } from './kylslogin.component';

describe('KylsloginComponent', () => {
  let component: KylsloginComponent;
  let fixture: ComponentFixture<KylsloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KylsloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KylsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
