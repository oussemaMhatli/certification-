import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent implements OnInit {





  clicked=false;
  hidden= true;
  Qhidden=true;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}
