import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user:any
  @Input()
  index:any
  qhiden=true
  users:any
  @Output()
  openEvent=new EventEmitter()
  constructor( private userService:UserService,private router:Router) { }
  @ViewChild('add', { static: false }) myModal1!: ElementRef;
  elm1!: HTMLElement;
  name!: string;
  email!:string;
  code!:string
  text:string=''
  ngOnInit(): void {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      this.text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  hide() {
    this.qhiden=!this.qhiden

  }
  ngAfterViewInit(): void {
    this.elm1 = this.myModal1.nativeElement as HTMLElement;

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
  getAll(){
    this.userService.AllUser().subscribe(res=>{
      this.users=res
    })
  }
  delete(id: string) {
    if(confirm("you sure to delete this categorie!! ?")) {
      this.userService.deleteUser(id).subscribe(form=>{
this.openEvent.emit()
      })


    }
  }

  goEdit(id: any) {
    this.router.navigate(['home/userEdit/'+id])

  }

  sendmail() {
this.userService.upExCode(this.user._id,this.text).subscribe(res=>{
  let mail={
    msg:this.text,
    rec:this.user.email
  }
  this.userService.sendemail(mail).subscribe(res=>{
    Swal.fire({title: "code sended", icon: "success"})
this.close()
  })
})
  }
}
