import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwathiComponent } from './swathi.component';

describe('SwathiComponent', () => {
  let component: SwathiComponent;
  let fixture: ComponentFixture<SwathiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwathiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
