import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { ProjectModel } from '../_shared/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private projectService: ProjectService) {}

  projectList: ProjectModel[] = [];
  isLoading = true;
  ngOnInit(): void {
    this.projectService.getProjects().subscribe((response) => {
      this.projectList = response.data;
      this.isLoading = false;
    });
  }
}
