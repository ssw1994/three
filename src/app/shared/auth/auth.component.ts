import { Component, OnInit } from '@angular/core';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';
declare var gapi:any;
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() {
    try{
      // let head= document.getElementsByTagName('head')[0];
      // let el = document.createElement("script");
      // el.setAttribute("src","https://apis.google.com/js/platform.js");
      // el.setAttribute("type",'text/javascript');
      // head.appendChild(el);
    }catch(error){
      console.error(error);
    }
   }


   public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '212623355031-t3280fh3ub60os3r7dmt746u7pi7e5e3.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE


      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }



   signup(ISignup:string){
     try{
      switch(ISignup){
        case "google":break;
        case "linkedIn":break;
        case "facebook":break;
      }
     }catch(error){
       console.error(error);
     }
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    try{
      this.googleInit();
    }catch(error){
      console.error(error);
    }
  }

}
