import {RouterModule, Routes} from '@angular/router';
import {BlogListComponent} from './blog-list/blog-list.component';
import {NgModule} from '@angular/core';
import {NewBlogComponent} from './new-blog/new-blog.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: 'newBlog',
    component: NewBlogComponent
  },
  {
    path: 'editBlog',
    component: EditBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRouting {
}
