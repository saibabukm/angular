import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog04Component } from './mat-dialog04.component';

describe('MatDialog04Component', () => {
  let component: MatDialog04Component;
  let fixture: ComponentFixture<MatDialog04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialog04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialog04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
