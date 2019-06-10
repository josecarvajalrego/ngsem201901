import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostAddComponent } from './post-add/post-add.component';
import { TagModule } from '../tag/tag.module';

import { FormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PostAddComponent, PostListComponent],
  imports: [
    CommonModule,
    TagModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    PostAddComponent,
    PostListComponent
  ]
})
export class PostModule { }
