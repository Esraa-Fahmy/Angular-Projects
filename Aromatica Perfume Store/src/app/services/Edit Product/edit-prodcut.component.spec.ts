import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdcutComponent } from './edit-prodcut.component';

describe('EditProdcutComponent', () => {
  let component: EditProdcutComponent;
  let fixture: ComponentFixture<EditProdcutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProdcutComponent]
    });
    fixture = TestBed.createComponent(EditProdcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
