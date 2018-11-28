import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user/user.service";
import { SearchService } from "../services/search/search.service";
import { FormControl,FormGroup,FormBuilder,Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { localDB } from "../general/lsdb";
declare var jQuery:any;
export interface login{
  username:string;
  password:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  login:any = {} as login;
  filePath:string = "./assets/icons/"
  
  constructor(private userservice:UserService,private fb:FormBuilder,private router:Router,private searchservice:SearchService) {
      try{
        this.loginForm = <FormGroup>this.getLoginForm();
      }catch(error){
        console.error(error);
      }
   }

   errorMsg:string;
   submit(){
     try{
      this.userservice.login(this.login).subscribe((res)=>{
        if(res && res.statusCode == 200){
          this.router.navigate(["/mech"]).then(()=>{
            console.log("Logged in Successfully");

            this.searchservice.setloggedUser(res.data);
          });
        }else{
          if(res && res.statusCode == 404){
            this.errorMsg = res.msg;
            this.clearError();
          }
        }
      });
     }catch(error){
       console.error(error);
     }
   }


   gotoRegister(){
     try{
      this.router.navigate(["/","register"]).then(()=>{
        console.log("Registering new user");
      });
     }catch(error){
       console.error(error);
     }
   }

   clearError(){
     try{
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
     }catch(error){
       console.error(error);
     }
   }

   getLoginForm():FormGroup{
     try{
      let formGroup:FormGroup;
      formGroup = this.fb.group({
        username:['',[Validators.required]],
        password:['',[Validators.required]]
      });
      return formGroup;
     }catch(error){
       console.error(error);
     }
   }
   
   forgotPassword(){

   }


  ngOnInit() {
    try{
      if(localDB.getDatabyKey("user")){
        this.router.navigate(["/mech"]).then(()=>{
          //console.log("Logged in Successfully");
          this.searchservice.setloggedUser(localDB.getDatabyKey("user"));
        });
      }
    }catch(error){
      console.error(error);
    }
  }

  ngAfterViewInit(){
    try{
      jQuery("app-header").css("display","none");
      jQuery("app-footer").css("display","none");
    }catch(error){
      console.error(error);
    }
  }

  ngOnDestroy(){
    try{
      jQuery("app-header").css("display","block");
      jQuery("app-footer").css("display","block");
    }catch(error){
      console.error(error);
    }
  }
}
