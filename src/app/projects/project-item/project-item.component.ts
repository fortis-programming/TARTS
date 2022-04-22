import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/_shared/models/project.model';

import * as AOS from 'aos';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: ProjectModel = {
    id: '',
    projectName: '',
    image: ''
  }
  
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
