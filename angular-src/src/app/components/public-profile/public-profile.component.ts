import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

currURL;
username;
email;
foundProfile = false;
message;
messageClass;

  constructor(private authService: AuthService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currURL=this.activatedRoute.snapshot.params;
    this.authService.getPublicProfile(this.currURL.username).subscribe(data => {
      if (!data.success) {
        this.foundProfile=false;
        this.messageClass='alert alert-danger';
        this.message='No user found with that name';
      } else {
        this.foundProfile=true;
      this.username = data.user.username;
      this.email = data.user.email;
    }
    });
  }

}
