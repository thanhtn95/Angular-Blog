import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BlogService} from '../blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent implements OnInit {
  blogForm: FormGroup;

  constructor(private fb: FormBuilder,
              private blogService: BlogService,
              private router: Router) {
  }

  ngOnInit() {
    this.blogForm = this.fb.group({
      title: [''],
      body: ['']
    });
  }

  onSubmit() {
    this.blogService.addBlog(this.blogForm.value);
    this.router.navigateByUrl('/blog');
  }
}
