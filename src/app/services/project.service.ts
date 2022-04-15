import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectModel } from '../_shared/models/project.model';
import { BaseResponse } from '../_shared/models/base-response';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<BaseResponse<ProjectModel[]>> {
    return this.http.get<BaseResponse<ProjectModel[]>>('../../assets/mocks/projects.json');
  }
}
