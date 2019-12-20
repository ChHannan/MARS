import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditPresComponent } from './dialog-edit-pres.component';

describe('DialogEditPresComponent', () => {
  let component: DialogEditPresComponent;
  let fixture: ComponentFixture<DialogEditPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
