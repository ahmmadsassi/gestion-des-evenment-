import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEvenmentComponent } from './post-evenment.component';

describe('PostEvenmentComponent', () => {
  let component: PostEvenmentComponent;
  let fixture: ComponentFixture<PostEvenmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEvenmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEvenmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
