import { Component, OnInit } from '@angular/core';
import {QuestionsService} from "../../../Services/questions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {
  Search: string='';
question:any
  fileUrl="http://localhost:3000/file/get/";

  constructor(private Qservice:QuestionsService,private router:Router) { }

  ngOnInit(): void {
    this.AllQ()
  }

AllQ(){
    this.Qservice.AllCat().subscribe(res=>{
      this.question=res
    })
}
  delete(id: string) {
    if(confirm("you sure to delete this categorie!! ?")) {
      this.Qservice.deleteCat(id).subscribe(form=>{
        this.AllQ()
      })


    }
  }

  go(id:string) {
    this.router.navigate(['/home/editQ/'+id])
  }
}
