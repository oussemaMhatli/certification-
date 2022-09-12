import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/user";
import {UserService} from "../../../Services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-form-user',
  templateUrl: './edit-form-user.component.html',
  styleUrls: ['./edit-form-user.component.css']
})
export class EditFormUserComponent implements OnInit {
id!:string
user!:User
  userup!:User
  constructor(private route:ActivatedRoute,private userService:UserService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
this.userService.getOneUser(this.id).subscribe(res=>{
  this.user=res
})
  }
  updateuser(){
  if(this.user.name==''||this.user.Activationcode==""||this.user.password.length<8){
    Swal.fire({title: "verify your data", icon: "error"})
  }else{
this.userup=this.user
    this.userService.updateuser(this.user._id,this.userup).subscribe(res=>{
      Swal.fire({title: "data updated", icon: "success"})
    },error => {      Swal.fire({title: "oops! error", icon: "error"})
    })
  }
  }

}
