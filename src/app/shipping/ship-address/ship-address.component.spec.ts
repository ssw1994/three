import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipAddressComponent } from './ship-address.component';

describe('ShipAddressComponent', () => {
  let component: ShipAddressComponent;
  let fixture: ComponentFixture<ShipAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
