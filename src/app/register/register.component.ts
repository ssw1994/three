import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { ChatService } from "../shared/service/chat.service";
import { SearchService } from "../services/search/search.service";
import { Router } from "@angular/router";
import { Global } from "../shared/global";
declare var jQuery: any;
interface user {
  username: string;
  email: string;
  mobile: number;
  password: string;
}

export class User {
  username: string;
  email: string;
  mobile: number;
  password: string;
  constructor() {
    this.username = null;
    this.email = null;
    this.mobile = null;
    this.password = null;
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: user = new User();
  showPassword: boolean = false;
  filePath: string = "./assets/icons/";

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private searchservice: SearchService, private chatservice: ChatService) {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', Validators.compose([Validators.required])],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern(Global.MOBILE_REGEX)])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(Global.PASSWORD_REGEX)])],
      rePassword: ['', [Validators.required, this.checkPassword.bind(this)]],
    });
  }

  ngOnInit() {
  }

  checkPassword(control: AbstractControl) {
    try {
      if (control && control.value) {
        let _parentForm = control.parent;
        if (_parentForm) {
          if (control.value !== _parentForm.get('password').value) {
            return { mismatch: true };
          }
        }
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  }

  register(iForm: FormGroup) {
    if (iForm.valid) {
      //let user: user = this.user;
      this.userService.signup(this.user).subscribe((result) => {
        if (result && result.statusCode == 200) {
          this.chatservice.sendMail(this.user).subscribe(
            (response) => {
              console.log(response);
              this.searchservice.setloggedUser(result.data);
              this.router.navigate(["/", "mech"]).then(
                (res) => {
                  console.log(res);
                  this.searchservice.setloggedUser(result.data);
                },
                (error) => {
                  console.error(error);
                }
              );
            },
            (error)=>{
              console.error(error);
            }
          );
         
          // this.router.navigate(["/", "mech"]).then(() => {
          //   console.log("Navigating to mech");
          //   this.searchservice.setloggedUser(result.data);
          // });
        }
      })
    }
  }

  ngAfterViewInit() {
    try {
      jQuery("app-header").css("display", "none");
      jQuery("app-footer").css("display", "none");
    } catch (error) {
      console.error(error);
    }
  }

  ngOnDestroy() {
    try {
      jQuery("app-header").css("display", "block");
      jQuery("app-footer").css("display", "block");
    } catch (error) {
      console.error(error);
    }
  }

}
