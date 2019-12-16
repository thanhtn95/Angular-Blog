import {Component, OnInit} from '@angular/core';
import {Blog} from '../blog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BlogService} from '../blog.service';
import {Router} from '@angular/router';
import {DataTransferService} from '../../data-transfer.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  blog: Blog;
  blogForm: FormGroup;

  constructor(private fb: FormBuilder,
              private blogService: BlogService,
              private router: Router,
              private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    this.blog = this.dataTransferService.getData();
    this.blogForm = this.fb.group({
      id: [this.blog.id],
      title: [this.blog.title],
      body: [this.blog.body]
    });
  }

  onSubmit() {
    this.blogService.editBlog(this.blogForm.value);
    this.router.navigateByUrl('/blog');
  }
}
