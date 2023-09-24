import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { ExperienceModel } from '../_shared/models/experience.model';

@Component({
  selector: 'app-working-experience',
  templateUrl: './working-experience.component.html',
  styleUrls: ['./working-experience.component.scss']
})
export class WorkingExperienceComponent implements OnInit {
  constructor(
    private experienceService: ExperienceService
  ) { }

  experienceList: ExperienceModel[] = [];
  ngOnInit(): void {
    this.experienceService.getExperienceList().subscribe(response => {
      this.experienceList = response.data.reverse();
    })
  }

}
