import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../Services/user.service";
import {User} from "../models/user";
import Swal from "sweetalert2";

@Component({
  selector: 'app-confirmde',
  templateUrl: './confirmde.component.html',
  styleUrls: ['./confirmde.component.css']
})
export class ConfirmdeComponent implements OnInit {
code!:string
  id!:string
  user!:User
  constructor(private route:ActivatedRoute,private Uservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.Uservice.getOneUser(this.id).subscribe(res=>{
      this.user=res
      console.log(this.user,'mala le')
    })
  }

  confirm() {

   if(this.user.Activationcode==this.code){
     this.Uservice.upValidation(this.id).subscribe(res=>{
       Swal.fire({title: "your email is confirmed", icon: "success"})
       this.router.navigate(['/'])
       console.log('chbyh maye5demch')
     })
   }else{
     Swal.fire({title: "invalid Code", icon: "error"})

   }

  }

  send() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  this.Uservice.upCode(this.id,text).subscribe(res=>{
    let mail={
      msg:text,
      rec:this.user.email
    }
    this.Uservice.sendemail(mail).subscribe(res=>{
      Swal.fire({title: "code sended", icon: "success"})

    })

  })
  }
}
