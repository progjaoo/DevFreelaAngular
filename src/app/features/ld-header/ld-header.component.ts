import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/IUser';

@Component({
  selector: 'ld-header',
  templateUrl: './ld-header.component.html',
  styleUrls: ['./ld-header.component.scss']
})
export class LdHeaderComponent implements OnInit {

  user: IUser = {};  

  ngOnInit(): void {
    this.buildHeader();
  }

  buildHeader() {
    if(this.checkIfUserIsLogged()){
      this.user.name = localStorage.getItem("userName") || '';
      this.user.role = localStorage.getItem("role") || '';
    }
  }

  checkIfUserIsLogged(): boolean {
    return localStorage.getItem("userName") !== null && localStorage.getItem("role") !== null;
  }
}
