import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog01Component } from './mat-dialog01.component';

describe('MatDialog01Component', () => {
  let component: MatDialog01Component;
  let fixture: ComponentFixture<MatDialog01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialog01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialog01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
