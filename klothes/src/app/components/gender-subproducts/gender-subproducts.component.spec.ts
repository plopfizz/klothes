import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderSubproductsComponent } from './gender-subproducts.component';

describe('GenderSubproductsComponent', () => {
  let component: GenderSubproductsComponent;
  let fixture: ComponentFixture<GenderSubproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderSubproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenderSubproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
