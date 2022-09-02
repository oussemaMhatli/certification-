import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Question} from "../../models/question";
import Swal from "sweetalert2";
import {User} from "../../models/user";
import {FileService} from "../../Services/file.service";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
img:any
  pass: string='';
  name: string='';
  email: string='';
  postal: string='';
  password: string='';
  user!:any
  constructor(private router:Router,private fileService:FileService,
              private Uservice:UserService) { }

  ngOnInit(): void {

  }

  go() {
    this.router.navigate(['/'])
  }
  onImageUpload(event: any) {
    this.img = event.target.files[0];

  }

  register() {
    let U = new User();
    if(this.pass!=this.password){
      Swal.fire({title: "confirm your password", icon: "error"})
    }
    if(this.name.length<3||this.password.length<8||this.email.length<8||this.postal==''||this.img==undefined){
      Swal.fire({title: "verify your data", icon: "error"})

    } else{
    this.fileService.upload(this.img).subscribe(res => {
U.img=res.filename

    U.email=this.email
    U.name=this.name
    U.role=1
    U.isEmailConfirmed=false
    U.password=this.pass
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      U.Activationcode=text
    this.Uservice.registre(U).subscribe(res=>{
      Swal.fire({title: "congratulation you are registred", icon: "success"})
      this.user=res
  console.log(this.user.id._id,'chbyky')

this.router.navigate(['confirm/'+this.user.id._id])
        let mail={
          msg:text,
          rec:this.email
        }
        this.Uservice.sendemail(mail).subscribe(res=>{
          console.log(res)
        })
    },error => {  Swal.fire({title: "exist Email", icon: "error"})}
    )
    })
    }
  }

}

