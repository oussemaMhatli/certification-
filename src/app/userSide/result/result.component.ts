import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResultService} from "../../Services/result.service";
import {Result} from "../../models/result";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

id!:string
  result!:Result
  constructor(private router:ActivatedRoute,private resultS:ResultService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"];
    this.resultS.getone(this.id).subscribe(res=>{
      this.result=res
      console.log(this.result)
    })

  }


}
