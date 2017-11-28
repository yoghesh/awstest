import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectFilterPipe } from './project-filter.pipe';
import { ProjectNewComponent } from './project-new/project-new.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
        RouterModule.forChild([
      {path: "projects", component: ProjectListComponent}
    ])
  ],
  declarations: [
    ProjectListComponent,
    ProjectFilterPipe,
    ProjectNewComponent
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectModule { }
