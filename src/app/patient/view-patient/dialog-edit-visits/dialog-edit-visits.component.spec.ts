import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditVisitsComponent } from './dialog-edit-visits.component';

describe('DialogEditVisitsComponent', () => {
  let component: DialogEditVisitsComponent;
  let fixture: ComponentFixture<DialogEditVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
