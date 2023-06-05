import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CategorieService} from "../../../Services/categorie.service";
import {MatDialog} from "@angular/material/dialog";
import {Cat} from "../../../models/cat";
import Swal from "sweetalert2";
import {FileService} from "../../../Services/file.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
categ:any;
  Search: string='';
  closeResult = '';
id!:string
cat!:any
  nam!:string
  fileUrl="http://localhost:3000/file/get/";

  constructor(private catService:CategorieService,private fileservice:FileService,private router:Router) { }

  @ViewChild('add', { static: false }) myModal1!: ElementRef;
  elm1!: HTMLElement;
  @ViewChild('edit', { static: false }) myModal2!: ElementRef;
  elm2!: HTMLElement;
  name: string='';
  desc: string='';
  img!: any;
  upimg!: any;
  descup!:string
  ngOnInit(): void {
    this.getAll()
  }
 getAll(){
    this.catService.AllCat().subscribe(data=>{
      this.categ=data;
    })
 }
  onImageUpload(event: any) {
    this.img = event.target.files[0];
  }
  onImageUpdate(event: any) {
    this.upimg = event.target.files[0];
  }
  ngAfterViewInit(): void {
    this.elm1 = this.myModal1.nativeElement as HTMLElement;
    this.elm2 = this.myModal2.nativeElement as HTMLElement;

  }
  close1(): void {
    this.elm2.classList.remove('show');
    setTimeout(() => {
      this.elm1.style.width = '0';
    }, 75);
  }

  close(): void {
    this.elm1.classList.remove('show');
    setTimeout(() => {
      this.elm1.style.width = '0';
    }, 75);
  }
  open(): void {
    this.elm1.classList.add('show');
    this.elm1.style.width = '100vw';
  }

  open1(_id: any): void {
    this.elm2.classList.add('show');
    this.elm2.style.width = '100vw';
this.catService.findOne(_id).subscribe(res=>{
  this.cat=res
  this.img=this.cat.img
  this.nam=this.cat.name
  this.id=this.cat._id
  this.descup=this.cat.desc
})
  }
  delete(id: string) {
    if(confirm("you sure to delete this Exam!! ?")) {
      this.catService.deleteCat(id).subscribe(form=>{
        this.getAll();
      })


    }
  }


  create() {
    let c=new Cat()
    if(this.name.length>0 && this.img!=undefined){
      console.log(this.img,"karhbt kamal")
      this.fileservice.upload(this.img).subscribe(res => {

      c.name=this.name
      c.img=res.filename
      c.desc=this.desc
  this.catService.createCat(c).subscribe(res => {
    Swal.fire({title: "created", icon: "success"})
    this.close()
    this.getAll();

  })
  })

    }else {
      Swal.fire({title: "verify", icon: "error"})

    }
  }

  update() {
    if(this.nam.length>0 && this.upimg!=undefined && this.descup.length>0){
      let Ca=new Cat()
      console.log(this.upimg,"kawatchou")
      this.fileservice.upload(this.upimg).subscribe(res => {
        console.log(res,"result")
Ca.img=res.filename
        Ca.name=this.nam
      Ca.desc=this.descup

      this.catService.updateCat(this.id,Ca).subscribe(res=>{
        Swal.fire({title: "Updated", icon: "success"})

        this.close1()
        this.getAll();
      })
      },error=>{console.log(error,"error")})
    }else{
      let Ca=new Cat()
      this.fileservice.upload(this.img).subscribe(res => {
        Ca.img=this.img
        Ca.name=this.nam
        Ca.desc=this.descup

        this.catService.updateCat(this.id,Ca).subscribe(res=>{
          Swal.fire({title: "Updated", icon: "success"})

          this.close1()
          this.getAll();
        })
      })

    }


  }

  go(name:string) {
    this.router.navigate(['/home/quest/'+name])
  }
  gopres(name:string) {
    this.router.navigate(['/home/res/'+name])
  }
}
