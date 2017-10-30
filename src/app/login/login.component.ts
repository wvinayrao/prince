import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  defaultFirstName = "";
  onLoginSubmit(userInfo)
  {
    //Add logic for Service call to verify Valid Login.
    let validLogin: boolean = true;
    console.log(userInfo);
    if(validLogin) {
      this.router.navigate(['/permissions'], {relativeTo: this.route});
    }
  }
  onRegisterSubmit(userInfo)
  {
    //Add logic for Service call to reigster new user.
    let validRegistration: boolean = true;
    console.log(userInfo);
    if(validRegistration) {
      this.router.navigate(['/permissions'], {relativeTo: this.route});
    }
  }
}
