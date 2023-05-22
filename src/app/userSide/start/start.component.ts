import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CategorieService} from "../../Services/categorie.service";
import jwt_decode from "jwt-decode";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  Search!: string;
  categ: any;
  code!: string;
user:any
  us:any
  text:string=''
  id!:string
  fileUrl="http://localhost:3000/file/get/";

  constructor(private catService:CategorieService,private router:Router,private userService:UserService) { }
  @ViewChild('edit', { static: false }) myModal2!: ElementRef;
  elm1!: HTMLElement;
  @ViewChild('notice', { static: false }) myModal1!: ElementRef;
  elm2!: HTMLElement;
  ngOnInit(): void {
    this.getAllCat()
    const token = localStorage.getItem('mariemmariem');

    if(token) {
      let decoded = jwt_decode(token);

      this.user=decoded;
      console.log(this.user.data,'7ata')
    }

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      this.text += possible.charAt(Math.floor(Math.random() * possible.length));

    this.userService.getOneUser(this.user.data._id).subscribe(res=>{
      this.us=res

    })
    console.log('sokrya',this.id)
  }
  ngAfterViewInit(): void {
    this.elm1 = this.myModal2.nativeElement as HTMLElement;
    this.elm2 = this.myModal1.nativeElement as HTMLElement;

  }
getAllCat(){
    this.catService.AllCat().subscribe(res=>{
      this.categ=res
    })
}

  validate() {
  if(this.code==this.us.Examcode){
this.close()
    this.open1()
  } else{
    Swal.fire({title: "invalid Code", icon: "error"})

  }
  }
  close(): void {
    this.elm1.classList.remove('show');
    setTimeout(() => {
      this.elm1.style.width = '0';
    }, 75);
  }

  open(name: string): void {
    this.elm1.classList.add('show');
    this.elm1.style.width = '100vw';
    localStorage.setItem("Cat", name);
  }
  close1(): void {
    this.elm1.classList.remove('show');
    setTimeout(() => {
      this.elm1.style.width = '0';
    }, 75);
  }

  open1(): void {
    this.elm2.classList.add('show');
    this.elm2.style.width = '100vw';
  }

  send() {
    let mail={
      msg:this.text,
      rec:this.us.email
    }

this.userService.upExCode(this.us._id,this.text).subscribe(
  res=>{
    this.userService.sendemail(mail).subscribe(res=>{
      console.log('taèataaaaaaaaaaaaaa',res)
      Swal.fire({"title":"email sended","icon":"success"})

    })
  }
)

  }

  gototest() {
    this.router.navigate(['/userhome/test'])

  }
}
