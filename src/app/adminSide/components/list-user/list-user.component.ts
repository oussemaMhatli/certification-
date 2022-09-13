import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MessageService} from "../../../Services/message.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  fileUrl="http://localhost:3000/file/get/";
  @Input()
  user:any
  nbr!:number
  constructor(private router:Router,private msgS:MessageService) { }

  ngOnInit(): void {
    this.count()
  }

  go() {
    this.msgS.ca(this.user._id).subscribe(res=>{})
    this.router.navigate(['home/msg/'+this.user._id])

  }
  count(){
    this.msgS.countfora(this.user._id).subscribe(res=>{
      this.nbr=res

    })
  }
}
