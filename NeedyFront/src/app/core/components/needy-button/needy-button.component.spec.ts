import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedyButtonComponent } from './needy-button.component';

describe('NeedyButtonComponent', () => {
  let component: NeedyButtonComponent;
  let fixture: ComponentFixture<NeedyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedyButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
