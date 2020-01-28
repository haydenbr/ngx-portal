import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPortalsComponent } from './ngx-portals.component';

describe('NgxPortalsComponent', () => {
  let component: NgxPortalsComponent;
  let fixture: ComponentFixture<NgxPortalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPortalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPortalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
