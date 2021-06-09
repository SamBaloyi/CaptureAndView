import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonsComponent } from './view-persons.component';

describe('ViewPersonsComponent', () => {
  let component: ViewPersonsComponent;
  let fixture: ComponentFixture<ViewPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
