import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostListComponent } from './post/post-list/post-list.component';

const routes: Routes = [
  { path: 'posts/add', component:PostAddComponent },
  { path: 'posts/list', component:PostListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
