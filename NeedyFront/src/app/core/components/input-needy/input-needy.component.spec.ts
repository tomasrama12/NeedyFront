import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNeedyComponent } from './input-needy.component';

describe('InputNeedyComponent', () => {
  let component: InputNeedyComponent;
  let fixture: ComponentFixture<InputNeedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNeedyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNeedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
