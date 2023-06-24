import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDashComponent } from './r-dash.component';

describe('RDashComponent', () => {
  let component: RDashComponent;
  let fixture: ComponentFixture<RDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
