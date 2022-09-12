import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../Services/user.service";
import {User} from "../../../models/user";
import {MessageService} from "../../../Services/message.service";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {Msg} from "../../../models/message";

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
id!:string
  user!:User
  fileUrl="http://localhost:3000/file/get/";
  msg!: string;
  messages:any

  constructor(private router:ActivatedRoute,private Uservice:UserService,private msgS:MessageService) { }

  ngOnInit(): void {
  this.id=this.router.snapshot.params['id']
    this.getOneUser()
    this.getmsg()
  }
getOneUser(){
  this.Uservice.getOneUser(this.id).subscribe(res=>{
    this.user=res
  })
}

  send() {
this.msgS.verif(this.id).subscribe(res=>{
  console.log(res,'ya')
  if(res==null){
    let msgs={
     msg: this.msg,
      ids: 'admin'
    }
let msg=new Msg()
    msg.idU=this.id
    msg.messages=msgs

    this.msgS.sendmessage(msg).subscribe(res=>{
      this.getmsg()
      this.msg=''
    })
  }else {
    this.msgS.userMSG(this.id).subscribe(res=>{
      this.msgS.pushmsg(res._id,this.msg,'admin').subscribe(res=>{
        this.getmsg()
        this.msg=''
      })

    })
  }
})
  }
  getmsg(){
    this.msgS.userMSG(this.id).subscribe(res=>{

      this.messages=res.messages
    })
  }
}
