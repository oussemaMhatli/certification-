import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.component.html',
  styleUrls: ['./uhome.component.css']
})
export class UhomeComponent implements OnInit {





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
