import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service'
import { IProject } from '../project'
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this._projectService.getProjects().subscribe(project => this.projectList = project);
  }

  pageTitle: string = 'Project List';
  listFilter: string = "";
  projectList: IProject[];


}
