import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppListComponent } from './view-app-list.component';

describe('ViewAppListComponent', () => {
  let component: ViewAppListComponent;
  let fixture: ComponentFixture<ViewAppListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
