import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateEditComponent } from './project-create-edit.component';

describe('ProjectCreateEditComponent', () => {
  let component: ProjectCreateEditComponent;
  let fixture: ComponentFixture<ProjectCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
