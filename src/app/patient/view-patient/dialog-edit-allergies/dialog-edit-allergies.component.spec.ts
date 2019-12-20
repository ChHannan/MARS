import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAllergiesComponent } from './dialog-edit-allergies.component';

describe('DialogEditAllergiesComponent', () => {
  let component: DialogEditAllergiesComponent;
  let fixture: ComponentFixture<DialogEditAllergiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditAllergiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditAllergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
