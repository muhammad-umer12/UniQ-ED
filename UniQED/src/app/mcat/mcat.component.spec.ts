import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McatComponent } from './mcat.component';

describe('McatComponent', () => {
  let component: McatComponent;
  let fixture: ComponentFixture<McatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
