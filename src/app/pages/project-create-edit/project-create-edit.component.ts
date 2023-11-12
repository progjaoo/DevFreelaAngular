import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProject } from 'src/app/shared/interfaces/IProject';
import { Helpers } from 'src/app/shared/utils/helpers';
import { msg } from 'src/app/shared/utils/msg';
import { ProjectCreateEditService } from './services/project-create-edit.service';

@Component({
  selector: 'app-project-create-edit',
  templateUrl: './project-create-edit.component.html',
  styleUrls: ['./project-create-edit.component.scss']
})
export class ProjectCreateEditComponent implements OnInit {
  id: string;
  screenType: 'create' | 'edit';
  title: string = '';
  actionButtonText: string = '';
  msg = msg;
  helpers = Helpers;

  projectCreateEditForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    totalCost: ['', [Validators.required]],
    description: ['', [Validators.required]]
  })

  constructor(private router: Router, private projectCreateEditService: ProjectCreateEditService, private fb: FormBuilder) {
    this.id = history.state.id;
    this.screenType = this.id ? 'edit' : 'create';
  }

  ngOnInit(): void {
    this.setScreenTypeTexts();
    this.fillInputs();
  }

  createOrEdit() {
    if(this.projectCreateEditForm.valid){
      // Inicia a massa de dados (payload)
      let payload: IProject = this.projectCreateEditForm.value;
      payload.idClient = localStorage.getItem("idClient");

      if(this.screenType === 'create'){
        this.projectCreateEditService.postProject(payload)
          .subscribe(response => {
            alert('Cadastrado com sucesso!');
            this.router.navigateByUrl('list');
          })
      }

      if(this.screenType === 'edit'){
        this.projectCreateEditService.putProject(payload, this.id)
        .subscribe(response => {
          alert('Editado com sucesso!');
          this.router.navigateByUrl('list');
        })
      }
    } else {
      this.projectCreateEditForm.markAllAsTouched();
    }
  }

  fillInputs() {
    if (this.screenType === 'edit') {
      this.projectCreateEditService.getProjectById(this.id)
        .subscribe((project: IProject) => {
          this.projectCreateEditForm.patchValue({
            title: project.title,
            totalCost: project.totalCost,
            description:   project.description
          })
        })
      }
  }

  setScreenTypeTexts() {
    // MODO CRIAR
    if (this.screenType == 'create') {
      this.title = "Vamos cadastrar seu novo projeto!";
      this.actionButtonText = "Cadastrar";
    }

    // MODO EDITAR
    if (this.screenType == 'edit') {
      this.title = "Editar projeto";
      this.actionButtonText = "Salvar";
    }
  }
}
