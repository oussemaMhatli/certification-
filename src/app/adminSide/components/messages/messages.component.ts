import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../Services/user.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
user:any
  Search: any;
  constructor(private router:Router,private userS:UserService) { }

  ngOnInit(): void {
  this.getAllUser()
  }

  go() {
    this.router.navigate(['home/addQ'])
  }
  getAllUser(){
    this.userS.AllUser().subscribe(res=>{
      this.user=res
    })
  }
}
