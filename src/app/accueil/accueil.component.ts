import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  title = 'front';

  constructor(private route :Router) { }

  ngOnInit(): void {

  }

  go() {
    this.route.navigate(['login'])
  }
}
