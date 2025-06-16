import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecticeForComponent } from './directice-for.component';

describe('DirecticeForComponent', () => {
  let component: DirecticeForComponent;
  let fixture: ComponentFixture<DirecticeForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirecticeForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirecticeForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
