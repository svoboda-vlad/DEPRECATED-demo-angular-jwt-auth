import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'daja-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {

  constructor() { }

  accessToken = "";
  idToken = "";

  ngOnInit(): void {
    const hashParams = location.hash.replace("#","").split("&");
    hashParams.forEach((param) => {
      const p = param.split("=");
      if (p[0] == "access_token") this.accessToken = p[1];
      if (p[0] == "id_token") this.idToken = p[1];
    });
    console.log("access_token: ", this.accessToken);
    console.log("id_token: ", this.idToken);
  }

}
