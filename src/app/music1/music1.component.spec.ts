import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Music1Component } from './music1.component';

describe('Music1Component', () => {
  let component: Music1Component;
  let fixture: ComponentFixture<Music1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Music1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Music1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
