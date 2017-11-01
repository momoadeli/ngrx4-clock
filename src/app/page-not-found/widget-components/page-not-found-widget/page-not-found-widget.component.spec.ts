import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundWidgetComponent } from './page-not-found-widget.component';

describe('PageNotFoundWidgetComponent', () => {
  let component: PageNotFoundWidgetComponent;
  let fixture: ComponentFixture<PageNotFoundWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
