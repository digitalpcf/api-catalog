import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewapiComponent } from './addnewapi.component';

describe('AddnewapiComponent', () => {
  let component: AddnewapiComponent;
  let fixture: ComponentFixture<AddnewapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
