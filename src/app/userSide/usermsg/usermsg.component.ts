import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../Services/message.service";
import jwt_decode from "jwt-decode";
import {Msg} from "../../models/message";

@Component({
  selector: 'app-usermsg',
  templateUrl: './usermsg.component.html',
  styleUrls: ['./usermsg.component.css']
})
export class UsermsgComponent implements OnInit {
user:any
  messages:any
  msg!:string
  constructor(private msgS:MessageService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('mariemmariem');

    if(token) {
      let decoded = jwt_decode(token);

      this.user=decoded;
      console.log(this.user.data,'7ata')
    }
    this.getmsg()
  }
  getmsg(){
    this.msgS.userMSG(this.user.data._id).subscribe(res=>{

      this.messages=res.messages
      console.log('aff',this.messages)
    })
  }

  send() {
  console.log('yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    this.msgS.verif(this.user.data._id).subscribe(res=>{
      if(res==null){
        let msgs={
          msg: this.msg,
          ids: this.user.data._id
        }
        let msg=new Msg()
        msg.idU=this.user.data._id
        msg.messages=msgs

        this.msgS.sendmessage(msg).subscribe(res=>{
          this.getmsg()
    this.msg=''
        })

      }else {
        this.msgS.userMSG(this.user.data._id).subscribe(res=>{
          this.msgS.pushmsg(res._id,this.msg,this.user.data._id).subscribe(res=>{
            this.getmsg()
            this.msg=''
          })

        })



      }
    })
  }
}
