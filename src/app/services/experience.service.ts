import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../_shared/models/base-response';
import { ExperienceModel } from '../_shared/models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(
    private http: HttpClient
  ) { }

  getExperienceList(): Observable<BaseResponse<ExperienceModel[]>> {
    return this.http.get<BaseResponse<ExperienceModel[]>>('../../assets/mocks/experience.json');
  }
}
