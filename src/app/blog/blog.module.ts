import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {BlogRouting} from './blog-routing.module';
import {BlogService} from './blog.service';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';



@NgModule({
  declarations: [BlogListComponent, NewBlogComponent, EditBlogComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, NgxPaginationModule, BlogRouting
  ],
  providers: [BlogService]
})
export class BlogModule { }
