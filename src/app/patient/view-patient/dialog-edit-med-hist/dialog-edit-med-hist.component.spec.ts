import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditMedHistComponent } from './dialog-edit-med-hist.component';

describe('DialogEditMedHistComponent', () => {
  let component: DialogEditMedHistComponent;
  let fixture: ComponentFixture<DialogEditMedHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditMedHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditMedHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
