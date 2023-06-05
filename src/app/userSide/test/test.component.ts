import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {QuestionsService} from "../../Services/questions.service";
import {Router} from "@angular/router";
import {ResultService} from "../../Services/result.service";
import {Result} from "../../models/result";
import jwt_decode from "jwt-decode";
import {ScoreService} from "../../Services/score.service";
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
name:any;
questions:any
  scheduler:any
  dueTime:any
  randomlevel!:boolean
  lev!:string
  somme!:number
  correctanswer!:number
  incorrectanswer!:number
  emptyanswer!:number
  totlalType:number=0
a!:number
  @ViewChild('edit', { static: false }) myModal1!: ElementRef;
  elm1!: HTMLElement;
user:any
  constructor(private QService:QuestionsService,private router:Router,
              private RS:ResultService, private scoreS:ScoreService ,private UserService:UserService) { }
  ngAfterViewInit(): void {
    this.elm1 = this.myModal1.nativeElement as HTMLElement;

  }
  ngOnInit(): void {




    console.log('tttttttt',this.questions)
  this.somme=0
  this.correctanswer=0
  this.incorrectanswer=0
  this.totlalType=0
    this.randomlevel =  Boolean(Math.round(Math.random()));
    console.log(this.randomlevel,'raw3a')
    this.name=localStorage.getItem('Cat')
    console.log(this.name)
    this.getcat()
    const token = localStorage.getItem('mariemmariem');

    if(token) {
      let decoded = jwt_decode(token);

      this.user=decoded;
      console.log(this.user.data,'7ata')
    }
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 10800;
      }
      if (this.timeLeft==0){
        this.router.navigate(['/userhome/res'])

      }
    },1000)
  }
  open(): void {
    this.elm1.classList.add('show');
    this.elm1.style.width = '100vw';
  }
  close(): void {
    this.elm1.classList.remove('show');
    setTimeout(() => {
      this.elm1.style.width = '0';
    }, 75);
  }
  getcat(){
    if(this.randomlevel == true){
      this.lev='level1'
    }else{
      this.lev='level2'
    }

    this.QService.getbycat(this.name,this.lev).subscribe(res=>{
      this.questions=res
      this.scoreS.t=res
      console.log('a',this.questions)
      console.log('b',this.scoreS.t)
    })
  }
  timeLeft: number = 10800;
  interval:any;
//10800
formatTime(time: number): string {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
}

padZero(value: number): string {
  return value.toString().padStart(2, '0');
}


  pauseTimer() {
    clearInterval(this.interval);
  }

  finish() {

    let R=new Result()
    R.name=this.user.data.name
    R.email=this.user.data.email
    R.activationcode=this.user.data.Examcode
    R.password=this.user.data.password
    R.postalcode=this.user.data.postalcode
    R.registrationdate=this.user.data.registrationdate
    R.categori=this.name
    R.level='level1'
    R.Quesnumber=this.questions.length
    R.wrongques=this.scoreS.incorrect
    R.correct=this.scoreS.correct
    R.emptyques=this.questions.length-(this.scoreS.incorrect+this.scoreS.correct)
    for (var i of this.questions) {
      this.totlalType=this.totlalType+i.type


    }
    R.score=(this.scoreS.s/this.totlalType)*100
    R.examDate=new Date()
    R.userID=this.user.data._id
  this.UserService.upPassed(this.user.data._id).subscribe(res=>{})
 this.RS.creatR(R).subscribe(res=>{
   this.router.navigate(['/userhome/res/'+res._id])


 })

  }
  countChangedHandler(e:any) {
   this.scoreS.cal(e.id,e.test)


  }
  countChangedHandler1(count: number) {

  }
  countChangedHandler2(count: number) {

  }
  countChangedHandler3(count: number) {

  }

}
