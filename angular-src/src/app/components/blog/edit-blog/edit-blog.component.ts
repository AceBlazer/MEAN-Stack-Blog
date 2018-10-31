import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

	message;
	messageClass;
	blog;
	processing = false;
	currURL;
	loading = true;

  constructor(private location: Location,
  private activateRoute: ActivatedRoute,
  private blogservice: BlogService,
  private router: Router
  ) { }

  ngOnInit() {
	  this.currURL = this.activateRoute.snapshot.params;
	  this.blogservice.getSingleBlog(this.currURL.id).subscribe(data => {
		  if(!data.success) {
			  this.messageClass='alert alert-danger';
			  this.message = 'Blog not found';
		  } else {
		  this.blog = data.blog;
		  this.loading = false;
		  }
	  });
  }
  
  
  updateBlogSubmit() {
	  this.processing = true; 
	  this.blogservice.editBlog(this.blog).subscribe(data => {
		  if(!data.success) {
			  this.messageClass='alert alert-danger';
			  this.message = data.message;
			  this.processing = false;
		  } else {
			  this.messageClass='alert alert-success';
			  this.message = 'Modified';
			  setTimeout(() => {
				  this.router.navigate(['/blog']);
			  }, 2000);
		  }
	  });
	  
  }
  
  goBack() {
	  this.location.back();
  }

}
