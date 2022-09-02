import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../Services/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
id!:string
  user!:User
  fileUrl="http://localhost:3000/file/get/";

  constructor(private router:ActivatedRoute,private Uservice:UserService) { }

  ngOnInit(): void {
  this.id=this.router.snapshot.params['id']
    this.getOneUser()
  }
getOneUser(){
  this.Uservice.getOneUser(this.id).subscribe(res=>{
    this.user=res
  })
}
}
