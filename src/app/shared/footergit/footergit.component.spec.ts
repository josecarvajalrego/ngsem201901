import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootergitComponent } from './footergit.component';

describe('FootergitComponent', () => {
  let component: FootergitComponent;
  let fixture: ComponentFixture<FootergitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootergitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootergitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
