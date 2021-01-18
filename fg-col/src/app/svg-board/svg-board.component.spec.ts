import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBoardComponent } from './svg-board.component';

describe('SvgBoardComponent', () => {
  let component: SvgBoardComponent;
  let fixture: ComponentFixture<SvgBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
