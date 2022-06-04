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

  projectData: ProjectModel = {
    id: '',
    projectName: '',
    image: '',
  };

  openProject(projectId: string): void {
    this.projectService.getProjects().subscribe((response) => {
      this.projectData = response.data.filter((data: ProjectModel) =>
        data.id.toLowerCase().includes(projectId.toLowerCase())
      )[0];
    });
  }
}
