import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingAndEventBindingComponent } from './property-binding-and-event-binding.component';

describe('PropertyBindingAndEventBindingComponent', () => {
  let component: PropertyBindingAndEventBindingComponent;
  let fixture: ComponentFixture<PropertyBindingAndEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBindingAndEventBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingAndEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
