import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  public users: any;
  Qhiden: boolean=false;
  Search: string='';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAll()
  }
getAll(){
    this.userService.AllUser().subscribe(res=>{
      this.users=res
      console.log(res,'mariem')
    })
}
  hide(item:any) {
  }
}
