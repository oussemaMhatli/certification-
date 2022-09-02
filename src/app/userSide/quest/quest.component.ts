import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

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

  constructor() { }

  ngOnInit(): void {
  }

  dowlnload() {

      const path=this.api+'file/as/'+this.question.zip;
      window.open(path);

  }
}
