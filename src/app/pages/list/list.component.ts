import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { IProject } from 'src/app/shared/interfaces/IProject';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private listService: ListService, private router: Router) {}

  list: IProject[] = [];
  tableIsLoaded: boolean = false;

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.listService.getProjects().subscribe(
      (response: IProject[]) => {
        this.list = response;
        this.buildTable();
        this.tableIsLoaded = true;
      }
    )
  }

  buildTable() {
    const idClient = localStorage.getItem('idClient');
    this.list = this.list.filter((listItem: IProject) => listItem.idClient === idClient);
  }

  deleteProject(id: string = '') {
    this.listService.deleteProject(id).subscribe(
      (response) => {
        this.list = this.list.filter((project: IProject) => project.id != id);
        this.buildTable();
      }
    )
  }

  redirectTo(url: string){
    this.router.navigateByUrl(url);
  }

  redirectToWithParams(url: string, id: string | undefined){
    const dataParams: NavigationBehaviorOptions = {
      state: {
        id: id
      }
    };

    this.router.navigate([`/${url}`], dataParams);
  }
}
