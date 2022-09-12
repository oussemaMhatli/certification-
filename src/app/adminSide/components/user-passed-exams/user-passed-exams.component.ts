import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {ResultService} from "../../../Services/result.service";

@Component({
  selector: 'app-user-passed-exams',
  templateUrl: './user-passed-exams.component.html',
  styleUrls: ['./user-passed-exams.component.css']
})
export class UserPassedExamsComponent implements OnInit {
  Search!: string;
users:any
  results:any
  constructor(private userService:UserService,private resService:ResultService) { }

  ngOnInit(): void {
  this.getAll()
  }
  getAll(){
    this.resService.getAll().subscribe(res=>{
      this.results=res
    })
  }
}
