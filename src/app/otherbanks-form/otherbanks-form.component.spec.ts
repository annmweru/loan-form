import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherbanksFormComponent } from './otherbanks-form.component';

describe('OtherbanksFormComponent', () => {
  let component: OtherbanksFormComponent;
  let fixture: ComponentFixture<OtherbanksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherbanksFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherbanksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
