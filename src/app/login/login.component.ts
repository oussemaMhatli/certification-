import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {LoginService} from "./service/login.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
user:any
  constructor(private router:Router,private loginS:LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl ('' , [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password : new FormControl ('' , Validators.required)
    });
  }

  loginAdmin() {
    this.loginS.login(this.loginForm.value).subscribe((res:any)=> {
        localStorage.setItem("mariemmariem", res.token);
        const token = localStorage.getItem('mariemmariem');

        if (token) {
          let decoded = jwt_decode(token);

          this.user=decoded;
        }
        if(this.user.data.role===0){
          this.router.navigate(['/home/Dashboard'])        }
       if(this.user.data.role===1){
          if(this.user.data.isEmailConfirmed===false){
            Swal.fire({title: "email not confirmed", icon: "error"})
            this.router.navigate(['/confirm/'+this.user.data._id])

          }else {
            this.router.navigate(['/userhome'])
          }
        }
      },error => {Swal.fire({title: "email or password erronée", icon: "error"})}
    )
  }

  go() {
    this.router.navigate(['/registre'])
  }
}
