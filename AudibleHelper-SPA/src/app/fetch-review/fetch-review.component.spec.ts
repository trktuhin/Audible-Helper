/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FetchReviewComponent } from './fetch-review.component';

describe('FetchReviewComponent', () => {
  let component: FetchReviewComponent;
  let fixture: ComponentFixture<FetchReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
