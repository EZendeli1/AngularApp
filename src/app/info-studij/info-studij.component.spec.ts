import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStudijComponent } from './info-studij.component';

describe('InfoStudijComponent', () => {
  let component: InfoStudijComponent;
  let fixture: ComponentFixture<InfoStudijComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoStudijComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoStudijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
