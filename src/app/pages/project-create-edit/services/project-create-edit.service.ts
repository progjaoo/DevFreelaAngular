import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from 'src/app/shared/interfaces/IProject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectCreateEditService {

  constructor(private http: HttpClient) {}

  postProject(project: IProject){
    return this.http.post(`${environment.apiUrl}/projects`, project)
  }

  putProject(project: IProject, id: string){
    return this.http.put(`${environment.apiUrl}/projects/${id}`, project)
  }

  getProjectById(id: string){
    return this.http.get<IProject>(`${environment.apiUrl}/projects/${id}`)
  }
}
