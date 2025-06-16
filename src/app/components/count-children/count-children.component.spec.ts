import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountChildrenComponent } from './count-children.component';

describe('CountChildrenComponent', () => {
  let component: CountChildrenComponent;
  let fixture: ComponentFixture<CountChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
