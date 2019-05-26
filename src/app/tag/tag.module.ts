import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagAddComponent } from './tag-add/tag-add.component';

@NgModule({
  declarations: [TagListComponent, TagAddComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TagListComponent, 
    TagAddComponent
  ]
})
export class TagModule { }
