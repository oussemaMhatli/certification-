import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../../Services/result.service';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../../models/result';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {
user!:Result[]
id:any
Search:any
  constructor(private result:ResultService,private route:ActivatedRoute) { }

  ngOnInit() {
this.id=this.route.snapshot.params["id"]
this.getAll(this.id)
  }
getAll(cat:any){
  this.result.getCat(cat).subscribe(res=>{
    this.user=res
    console.log(this.user)

  })
}
}
