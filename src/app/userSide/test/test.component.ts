import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {QuestionsService} from "../../Services/questions.service";
import {Observable, SchedulerLike, timer} from "rxjs";
import {Router} from "@angular/router";

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
  @ViewChild('edit', { static: false }) myModal1!: ElementRef;
  elm1!: HTMLElement;

  constructor(private QService:QuestionsService,private router:Router) { }
  ngAfterViewInit(): void {
    this.elm1 = this.myModal1.nativeElement as HTMLElement;

  }
  ngOnInit(): void {
    this.name=localStorage.getItem('Cat')
    console.log(this.name)
    this.getcat()

    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 10800;
      }
      if (this.timeLeft==0){
        console.log('yaaaaaaaaaaaaaaaaaaaaaaaaaaa')
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
    this.QService.getbycat(this.name).subscribe(res=>{
      this.questions=res
      console.log('a',this.questions)
    })
  }
  timeLeft: number = 10800;
  interval:any;
//10800


  pauseTimer() {
    clearInterval(this.interval);
  }

  finish() {
    this.router.navigate(['/userhome/res'])

  }
}
