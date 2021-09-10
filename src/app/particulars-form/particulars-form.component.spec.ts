import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularsFormComponent } from './particulars-form.component';

describe('ParticularsFormComponent', () => {
  let component: ParticularsFormComponent;
  let fixture: ComponentFixture<ParticularsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
