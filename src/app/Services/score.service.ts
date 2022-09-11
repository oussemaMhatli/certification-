import { Injectable } from '@angular/core';
import {Question} from "../models/question";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
 public s:number=0
  public t:Question[]=[]
  public score:any=[]
  correct:number=0
  incorrect:number=0
  constructor() { }
  cal(id:string,test:boolean){
   let somme={
     id:id,
     test:test,
   }
   if(this.t.filter((e)=>e._id===id).length==0){
     //mahouch lawjoud
     this.score.push(somme)
     if(test){
       let x=this.t.filter((e)=>e._id===id)
       this.correct=this.correct+1
       this.s=this.s+x[0].type
     }
   }else{


       let x = this.t.filter((e) =>
         e._id === id
       )
     if(test){
       if(this.incorrect>0){
         this.incorrect=this.incorrect-1

       }
       this.correct=this.correct+1

       this.s = this.s + x[0].type
     }else{
       this.incorrect=this.incorrect+1
       if(this.s>0){
         this.correct=this.correct-1

         this.s=this.s - x[0].type

       }

     }

   }

  }
}
