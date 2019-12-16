import {Injectable, OnInit} from '@angular/core';
import {Blog} from './blog';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogList: Blog[];
  private blogApiUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  setBlogList(blogs: Blog[]) {
    this.blogList = blogs;
  }

  getCurrentBlogList() {
    return this.blogList;
  }

  getBlogList(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogApiUrl);
  }

  deleteBlog(blog: Blog) {
    let tmp = [];
    for (let item of this.blogList) {
      if (item.id !== blog.id) {
        tmp.push(item);
      }
    }
    this.blogList = tmp;
  }

  addBlog(blog: Blog) {
    blog.id = this.blogList[this.blogList.length - 1].id + 1;
    this.blogList.push(blog);
  }

  editBlog(blog: Blog) {
    const position = -1;
    for (let item of this.blogList) {
      if (item.id === blog.id) {
        item.title = blog.title;
        item.body = blog.body;
      }
    }
  }
}
