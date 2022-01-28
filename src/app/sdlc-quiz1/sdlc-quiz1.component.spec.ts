import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdlcQuiz1Component } from './sdlc-quiz1.component';

describe('SdlcQuiz1Component', () => {
  let component: SdlcQuiz1Component;
  let fixture: ComponentFixture<SdlcQuiz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdlcQuiz1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdlcQuiz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
