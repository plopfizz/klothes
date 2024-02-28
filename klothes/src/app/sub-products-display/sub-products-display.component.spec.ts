import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductsDisplayComponent } from './sub-products-display.component';

describe('SubProductsDisplayComponent', () => {
  let component: SubProductsDisplayComponent;
  let fixture: ComponentFixture<SubProductsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubProductsDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubProductsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
