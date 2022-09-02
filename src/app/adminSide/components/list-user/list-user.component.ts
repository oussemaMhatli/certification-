import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  fileUrl="http://localhost:3000/file/get/";
  @Input()
  user:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  go() {
    this.router.navigate(['home/msg/'+this.user._id])

  }
}
