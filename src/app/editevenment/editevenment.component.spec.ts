import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditevenmentComponent } from './editevenment.component';

describe('EditevenmentComponent', () => {
  let component: EditevenmentComponent;
  let fixture: ComponentFixture<EditevenmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditevenmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditevenmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
