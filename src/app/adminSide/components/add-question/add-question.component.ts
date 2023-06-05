import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {FileService} from "../../../Services/file.service";
import {Question} from "../../../models/question";
import {QuestionsService} from "../../../Services/questions.service";
import {FormControl} from "@angular/forms";
import {CategorieService} from "../../../Services/categorie.service";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
file:any;
  selectedType = '';
  selected = '';
  selectedCat = '';
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
  categ:any
  constructor(private fileService:FileService,private Qservice:QuestionsService,private categS:CategorieService) { }

  ngOnInit(): void {
    this.categS.AllCat().subscribe(res=>{
      this.categ=res
    })
  }
  onSelected(value:string): void {
    this.selectedType = value;
  }
  onSelected1(value:string): void {
    this.selected = value;
  }
  onSelectedCat(value:string): void {
    this.selectedCat = value;
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
if(this.selectedCat==''){
  Swal.fire({title:"choisir categorie",icon:"error"})
}else{
  let q = new Question();

  this.fileService.upload(this.file).subscribe(res => {


    q.questionText=this.text
    q.img=res.filename;
    if(this.selected=='level1'){
      q.level='level1'
    }
    if(this.selected=='level2'){
      q.level='level2'
    }
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

    q.categorie=this.selectedCat
    q.choices=[this.rep1,this.rep2,this.rep3,this.rep4]
    if(this.ch1){
      q.correct=this.rep1
    }
    if(this.ch2){
      q.correct=this.rep2
    }
    if(this.ch3){
      q.correct=this.rep3
    }
    if(this.ch4){
      q.correct=this.rep4
    }
    if(this.zip==undefined){
      q.zip=""
      this.Qservice.createQ(q).subscribe(res => {
        Swal.fire({title: "Question created", icon: "success"})
      }, err => Swal.fire('champs non valide', 'error', "error"))
    }else{
      this.fileService.upload(this.zip).subscribe(data=>{

        q.zip=data.filename


        this.Qservice.createQ(q).subscribe(res => {
          Swal.fire({title: "Question created", icon: "success"})
        }, err => Swal.fire('champs non valide', 'error', "error"))
      })
    }

  })
}


  }


}
