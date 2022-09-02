import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  clicked=false;

  constructor() { }

  ngOnInit(): void {
  }


  public openNav(){
    this.clicked=!this.clicked;
  }

}
