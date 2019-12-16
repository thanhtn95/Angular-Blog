import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BlogService} from '../blog.service';
import {Blog} from '../blog';
import {DataTransferService} from '../../data-transfer.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  p = 1;
  count = 10;
  blogList: Blog[];

  constructor(private router: Router,
              private blogService: BlogService,
              private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    if (this.blogService.getCurrentBlogList() !== undefined) {
      this.refreshBlogList();
    } else {
      this.blogService.getBlogList().subscribe(data => {
        this.blogService.setBlogList(data);
        this.refreshBlogList();
      });
    }
  }

  refreshBlogList() {
    this.blogList = this.blogService.getCurrentBlogList();
  }


  goToEditBlog(item: Blog) {
    this.dataTransferService.setData(item);
    this.router.navigateByUrl('blog/editBlog');
  }

  deleteBlog(item: Blog) {
    if (confirm('Are You Sure?')) {
      this.blogService.deleteBlog(item);
      this.refreshBlogList();
    }
  }
}
