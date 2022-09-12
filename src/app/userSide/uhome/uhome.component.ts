import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MessageService} from "../../Services/message.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.component.html',
  styleUrls: ['./uhome.component.css']
})
export class UhomeComponent implements OnInit {


  nbrmsg!:number
user:any

  clicked=false;
  hidden= true;
  Qhidden=true;

  constructor(private router: Router,private msgS:MessageService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('mariemmariem');

    if(token) {
      let decoded = jwt_decode(token);

      this.user=decoded;
    }
    this.countmsg()
  }
countmsg(){
    this.msgS.countmsgforUser(this.user.data._id).subscribe(res=>{
      this.nbrmsg=res
    })
}

  public openNav(){
    this.clicked=!this.clicked;
  }

  afficher() {
    this.hidden=!this.hidden
  }

  afficherQ() {
    this.Qhidden=!this.Qhidden
  }

  logout() {
    localStorage.removeItem('mariemmariem');
    this.router.navigate(['']);
  }

  update() {
    this.msgS.uodatemsgforuser(this.user.data._id).subscribe(res=>{
      this.countmsg()
    })
  }
}
