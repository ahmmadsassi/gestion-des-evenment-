import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEvenmentComponent } from './crud-evenment.component';

describe('CrudEvenmentComponent', () => {
  let component: CrudEvenmentComponent;
  let fixture: ComponentFixture<CrudEvenmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEvenmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEvenmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
