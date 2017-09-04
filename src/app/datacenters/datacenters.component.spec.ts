import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatacentersComponent} from './datacenters.component';

describe('DatacentersComponent', () => {
  let component: DatacentersComponent;
  let fixture: ComponentFixture<DatacentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatacentersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
