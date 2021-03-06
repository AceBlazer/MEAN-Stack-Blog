import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.css']
})
export class DeleteBlogComponent implements OnInit {

	message;
	messageClass;
	foundBlog = false;
	processing = false;
	blog;
	currURL;

  constructor(private blogService: BlogService,
  private activatedRoute: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
	  this.currURL = this.activatedRoute.snapshot.params;
	  this.blogService.getSingleBlog(this.currURL.id).subscribe ( data => {
		  if (!data.success) {
			  this.messageClass='alert alert-danger';
			  this.message=data.message;
		  } else {
			  this.blog = {
				  title: data.blog.title,
				  body: data.blog.body,
				  createdBy: data.blog.createdBy,
				  createdAt: data.blog.createdAt
			  }
			  this.foundBlog = true;
		  }
	  });
  }

  deleteBlog() {
	  this.processing=true;
	  this.blogService.deleteBlog(this.currURL.id).subscribe ( data => {
			if (!data.success) {
				this.messageClass='alert alert-danger';
				this.message=data.message;
		    } else {
				this.messageClass='alert alert-success';
				this.message=data.message;
			}
			setTimeout ( () => {
				this.router.navigate(['/blog']);
			}, 2000);
	  });
  }
  
  
  
}
