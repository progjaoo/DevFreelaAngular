// @ts-nocheck

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { msg } from 'src/app/shared/utils/msg';
import { RegisterService } from './services/register.service';
import { IUser } from './interfaces/IUser';
import { Router } from '@angular/router';
import { Helpers } from 'src/app/shared/utils/helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {
  }

  registerForm: FormGroup = this.fb.group({
    role: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })
  msg = msg;
  helpers = Helpers;

  ngOnInit(): void {}

  checkIfAnyRoleIsChecked() {
    let list = document.getElementsByName("role");
    let counter = 0;

    for (let radioButton of list) {
      if (radioButton.checked === false) {
        counter++;
      }
    }
    
    return counter !== list.length;
  }

  toogleRole(role: 'dev' | 'cliente'){
    this.registerForm.get('role')?.setValue(role);
  }

  cadastrar() {
    if(this.registerForm.valid){
      let payload: IUser = this.registerForm.value;
      this.registerService.postUser(payload).subscribe(
          (response) => {
            Swal.fire({
              title: 'Bom Trabalho!',
              text: "Cadastrado com sucesso!",
              icon: 'success',
              confirmButtonText: 'Ok!'
            }).then((result) => {
                if (result.isConfirmed) {
                  localStorage.setItem("userName", response.fullName);
                  localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
                  localStorage.setItem("idClient", response.id);

                  this.router.navigateByUrl('list');
                }
            })
          }
        );
    } else {
      this.registerForm.markAllAsTouched();
    }  
  }
}
