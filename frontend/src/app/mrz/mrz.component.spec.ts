import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrzComponent } from './mrz.component';

describe('MrzComponent', () => {
  let component: MrzComponent;
  let fixture: ComponentFixture<MrzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MrzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
