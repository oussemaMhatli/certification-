import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {QuestionsService} from "../../Services/questions.service";
import {Router} from "@angular/router";
import {ResultService} from "../../Services/result.service";
import {ScoreService} from "../../Services/score.service";

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {
  @Input()
  question:any
  fileUrl="http://localhost:3000/file/get/";
  api=environment.Api;
  rep1: any;
  rep2: any;
  rep3: any;
  rep4: any;
type:any
  a!:boolean
  name:any
  form: any;
rep:any
  s!:number
  incorrectAnswer1!:number
  correctAnswer1!:number
totaltype1!:number
@Output()
  score: EventEmitter<any> = new EventEmitter()
  @Output()
  correctAnswer: EventEmitter<number> = new EventEmitter()
  @Output()
  incorrectAnswer: EventEmitter<number> = new EventEmitter()
  @Output()
  totaltype: EventEmitter<number> = new EventEmitter()
  constructor( ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      rep1: new FormControl('', Validators.required),

    });
    this.s=0
  this.correctAnswer1=0
    this.incorrectAnswer1=0
    this.totaltype1=0
  }
  getvalue1(){

    this.rep=this.form.value.rep1

  if(this.question.reponse1.id==this.rep){
    if(this.question.reponse1.correct==true){
      this.s=this.s+this.question.type
     this.correctAnswer1=this.correctAnswer1+1
    }
    else{
      this.incorrectAnswer1=this.incorrectAnswer1+1
    }
  }
    if(this.question.reponse2.id==this.rep){

      if(this.question.reponse2.correct==true){
        this.s=this.s+this.question.type

        this.correctAnswer1=this.correctAnswer1+1
      }
      else{
        this.incorrectAnswer1=this.incorrectAnswer1+1
      }
    }
    if(this.question.reponse3.id==this.rep){

      if(this.question.reponse3.correct==true){
        this.s=this.s+this.question.type

        this.correctAnswer1=this.correctAnswer1+1
      }
      else{
        this.incorrectAnswer1=this.incorrectAnswer1+1
      }
    }
    if(this.question.reponse4.id==this.rep){

      if(this.question.reponse4.correct==true){
        this.s=this.s+this.question.type

        this.correctAnswer1=this.correctAnswer1+1
      }
      else{
        this.incorrectAnswer1=this.incorrectAnswer1+1
      }
    }

    this.totaltype1=this.question.type
    this.score.emit(this.s);
    this.correctAnswer.emit(this.correctAnswer1);
    this.incorrectAnswer.emit(this.incorrectAnswer1);

  }
  getvalue(){
this.s=0
    this.correctAnswer1=0
    this.incorrectAnswer1=0
    this.rep=this.form.value.rep1

   console.log(this.rep)

    if(this.question.correct==this.rep){
      this.s=this.s+this.question.type
      this.correctAnswer1=    this.correctAnswer1+1
      let a={
        id:this.question._id,
        test:true

      }
      this.score.emit(a);

    }else{
      this.s=0
      console.log('false')
      let a={
        id:this.question._id,
        test:false
      }
      this.score.emit(a);

      this.incorrectAnswer1=this.incorrectAnswer1+1
    }


    this.correctAnswer.emit(this.correctAnswer1);
    this.incorrectAnswer.emit(this.incorrectAnswer1);





  }
  get f(){
    return this.form.controls;
  }

  dowlnload() {

      const path=this.api+'file/as/'+this.question.zip;
      window.open(path);

  }

}
