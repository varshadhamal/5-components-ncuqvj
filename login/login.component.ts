import { Component, Input } from '@angular/core';

@Component({
  selector: 'login',
  //template:`<h1 style="text-decoration:underline;">{{title}}</h1>`//Inline Template
  templateUrl: './login.component.html',

})
export class LoginComponent {

  @Input()
  private title;


  private isUserNameError: boolean=false;
  private isPasswordError: boolean=false;
  private isPasswordMinError: boolean=false;

  private username: string;
  private password: string;

  
  
  blurValdiationPassword(){
 if (this.password == undefined || this.password == null || this.password == "") {
      this.isPasswordError= true;
      this.isPasswordMinError=false;
     // console.log("True: "+this.password);
    } else {
      this.isPasswordError= false;
      if(this.password.length<8){
        this.isPasswordMinError=true;
      }else{
        this.isPasswordMinError=false;
      }
    }
  }
  
  
  blurValidationUserName(){
if (this.username == undefined || this.username == null || this.username == "") {
      this.isUserNameError = true;
     // console.log("True: "+this.username);
    } else {
      this.isUserNameError = false;
     // console.log("False: "+this.username);
    }

    
    console.log(this.username);
    console.log(this.password);
  }

  login() {    
      console.log("Form is Submitted");    
  }



}