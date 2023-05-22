import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../Services/categorie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categ:any;

  constructor(private route:Router,private catService:CategorieService) { }

  ngOnInit() {
    this.getAll()
  }
  dropdownOpen = false; // Variable to track the dropdown open/close state

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen; // Toggle the dropdown open/close state
  }

  closeDropdown() {
    this.dropdownOpen = false; // Close the dropdown
  }

  selectCategory(category: any) {
    // Handle the selected category
    console.log(category);
    // Add your logic here to perform any action when a category is selected
  }

  go() {
    this.route.navigate(['login'])
  }
  goAccueil(){
    this.route.navigate(['acc'])

  }
  goabout(){
    this.route.navigate(['about'])

  }
  getAll(){
    this.catService.AllCat().subscribe(data=>{
      this.categ=data;
      console.log(this.categ,"categorie")
    })
 }
}
