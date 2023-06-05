import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResultService} from "../../Services/result.service";
import {Result} from "../../models/result";
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import 'jspdf-barcode';
import html2canvas from 'html2canvas';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @ViewChild('pdfTemplate', { static: false })
  pdfTemplate!: ElementRef;
id!:string
  result!:Result
  api=environment.Api;

  constructor(private router:ActivatedRoute,private resultS:ResultService) { }

  ngOnInit(): void {

    this.id = this.router.snapshot.params["id"];
    this.resultS.getone(this.id).subscribe(res=>{
      this.result=res
      console.log(this.result)
    })

  }

  download() {
    const doc = new jsPDF();
    const pdfTemplate = this.pdfTemplate.nativeElement;

    html2canvas(pdfTemplate).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 10, 10, 190, 0);
      doc.save('Certification.pdf');
    });

    const path=this.api+'file/as/'+doc;
    window.open(path);

  }

}
