import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog03Component } from './mat-dialog03.component';

describe('MatDialog03Component', () => {
  let component: MatDialog03Component;
  let fixture: ComponentFixture<MatDialog03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialog03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialog03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
