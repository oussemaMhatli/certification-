import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionsService} from "../../../Services/questions.service";
import {Question} from "../../../models/question";

@Component({
  selector: 'app-catques',
  templateUrl: './catques.component.html',
  styleUrls: ['./catques.component.css']
})
export class CatquesComponent implements OnInit {
name:string=''
  Q:any
  Search: any;
  fileUrl="http://localhost:3000/file/get/";

  constructor(private router:ActivatedRoute ,private quesS:QuestionsService) { }

  ngOnInit(): void {
  this.name=this.router.snapshot.params['id']
    this.getQ()
  }
  getQ(){
  this.quesS.getby(this.name).subscribe(res=>{
    this.Q=res
  })
  }
}
