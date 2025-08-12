import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singleproductpage } from './singleproductpage';

describe('Singleproductpage', () => {
  let component: Singleproductpage;
  let fixture: ComponentFixture<Singleproductpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singleproductpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singleproductpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
