import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCreateEditComponent } from './project-create-edit.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectCreateEditComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCreateEditRoutingModule { }
