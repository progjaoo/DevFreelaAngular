import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdWrapperComponent } from './ld-wrapper.component';

describe('LdWrapperComponent', () => {
  let component: LdWrapperComponent;
  let fixture: ComponentFixture<LdWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
