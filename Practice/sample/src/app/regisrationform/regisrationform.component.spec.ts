import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisrationformComponent } from './regisrationform.component';

describe('RegisrationformComponent', () => {
  let component: RegisrationformComponent;
  let fixture: ComponentFixture<RegisrationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisrationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
