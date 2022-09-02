import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../Services/user.service";

@Component({
  selector: 'app-user-passed-exams',
  templateUrl: './user-passed-exams.component.html',
  styleUrls: ['./user-passed-exams.component.css']
})
export class UserPassedExamsComponent implements OnInit {
  Search!: string;
users:any
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  this.getAll()
  }
  getAll(){
    this.userService.AllUser().subscribe(res=>{
      this.users=res
      console.log('r5s',this.users)
    })
  }
}
