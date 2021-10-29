import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnylineComponent } from './anyline.component';

describe('AnylineComponent', () => {
  let component: AnylineComponent;
  let fixture: ComponentFixture<AnylineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnylineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
