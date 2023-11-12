import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdButtonComponent } from './ld-button.component';

describe('LdButtonComponent', () => {
  let component: LdButtonComponent;
  let fixture: ComponentFixture<LdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
