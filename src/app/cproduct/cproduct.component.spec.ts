import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CProductComponent } from './cproduct.component';

describe('CProductComponent', () => {
  let component: CProductComponent;
  let fixture: ComponentFixture<CProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
