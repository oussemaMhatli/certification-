import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {FileService} from "../../../Services/file.service";
import {Question} from "../../../models/question";
import {QuestionsService} from "../../../Services/questions.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
file:any;
  selectedType = '';
  text!: string;
  cat!:string;
  point!:number;
  rep1!:string;
  rep2!:string;
  rep3!:string;
  rep4!:string;
  ch1!:boolean
  ch2!:boolean
  ch3!:boolean
  ch4!:boolean
  zip: any;
  level: any;
  type:any
  constructor(private fileService:FileService,private Qservice:QuestionsService) { }

  ngOnInit(): void {
  }
  onSelected(value:string): void {
    this.selectedType = value;
    console.log(this.selectedType,'gmara')
  }
  onImageUpload(event: any) {
    this.file = event.target.files[0];

  }
  onImageUpload1(event: any) {
    this.zip = event.target.files[0];

  }


  checkCheckBoxvalue(event: any){
    this.ch1=event.checked
  }
  checkCheckBoxvalue2(event: any){
    this.ch2=event.checked
  }
  checkCheckBoxvalue3(event: any){
    this.ch3=event.checked
  }
  checkCheckBoxvalue4(event: any){
    this.ch4=event.checked
  }
  async addForm() {

    let q = new Question();

    this.fileService.upload(this.file).subscribe(res => {

      let r1={

        correct:this.ch1,
        text:this.rep1
      }
      let r2={
        correct:this.ch2,
        text:this.rep2
      }
      let r3={
        correct:this.ch3,
        text:this.rep3
      }
      let r4={
        correct:this.ch4,
        text:this.rep4
      }
     q.questionText=this.text
      q.img=res.filename;
     q.level=this.level
if(this.selectedType=='type1'){
  q.type=10
}
if(this.selectedType=='type2'){
  q.type=15
}
      if(this.selectedType=='type3'){
        q.type=20
      }
      if(this.selectedType=='type4'){
        q.type=25
      }

      q.categorie=this.cat
      q.reponse1=r1
      q.reponse2=r2
      q.reponse3=r3
      q.reponse4=r4

      console.log('aabdou',q)
if(this.zip==undefined){
  q.zip=""
  this.Qservice.createQ(q).subscribe(res => {
    Swal.fire({title: "Question created", icon: "success"})
  }, err => Swal.fire('champs non valide', 'error', "error"))
}else{
        this.fileService.upload(this.zip).subscribe(data=>{

            q.zip=data.filename


        console.log(q.zip,"3la moulena")
        this.Qservice.createQ(q).subscribe(res => {
          Swal.fire({title: "Question created", icon: "success"})
        }, err => Swal.fire('champs non valide', 'error', "error"))
      })
}

    })

  }



}
