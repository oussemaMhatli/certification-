import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MessageService} from "../../../Services/message.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent implements OnInit {


user:any
  nbrmsg!:number


  clicked=false;
  hidden= true;
  Qhidden=true;

  constructor(private router: Router,private msgS:MessageService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('mariemmariem');
  localStorage.removeItem('verif')
    if(token) {
      let decoded = jwt_decode(token);

      this.user=decoded;
    }
    this.countmsg()
  }
  countmsg(){
    this.msgS.countmsgforhome(this.user.data._id).subscribe(res=>{
      this.nbrmsg=res
    })
  if(this.nbrmsg>0){
    localStorage.setItem('verif','true')

  }else(
    localStorage.setItem('verif','false')

  )
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

  updatevis() {
this.msgS.uodatemsgforhome().subscribe(res=>{
  this.countmsg()

})

  }
}
