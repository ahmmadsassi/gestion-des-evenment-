import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenmentdetailsComponent } from './evenmentdetails.component';

describe('EvenmentdetailsComponent', () => {
  let component: EvenmentdetailsComponent;
  let fixture: ComponentFixture<EvenmentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenmentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
