import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog02Component } from './mat-dialog02.component';

describe('MatDialog02Component', () => {
  let component: MatDialog02Component;
  let fixture: ComponentFixture<MatDialog02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialog02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialog02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
