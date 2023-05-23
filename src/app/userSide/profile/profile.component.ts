import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jwt_decode from "jwt-decode";
import { User } from "../../models/user";
import { ResultService } from "../../Services/result.service";
import { Cat } from "../../models/cat";
import Swal from "sweetalert2";
import { FileService } from "../../Services/file.service";
import { UserService } from "../../Services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: any
  fileUrl = "http://localhost:3000/file/get/";
  name!: string;
  img!: string;
  email!: string;
  pass!: string;
  results: any
  file: any
  usera!: User
  @ViewChild('edit', { static: false }) myModal1!: ElementRef;
  elm1!: HTMLElement;
  constructor(private RS: ResultService, private fileservice: FileService, private usService: UserService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('mariemmariem');

    if (token) {
      let decoded = jwt_decode(token);

      this.user = decoded;
      console.log(this.user.data, '7ata')
    }
    this.getuser()
    this.get()
    this.img = this.user.data.img
    this.pass = this.user.data.password
    this.email = this.user.data.email
    this.name = this.user.data.name


  }

  onImageUpload(event: any) {
    this.file = event.target.files[0];

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
  update() {
    if (this.name.length > 0 && this.file != undefined && this.email.length > 0 && this.pass.length > 0) {
      let Ca = new User()
      this.fileservice.upload(this.file).subscribe(data => {
        Ca.img = data.filename
        Ca.name = this.name
        Ca.password = this.pass
        Ca.email = this.email
        Ca.role=this.user.data.role
        Ca.isEmailConfirmed=true
        Ca.score=this.user.data.scorescore
        Ca.postalcode=this.user.data.postalcode
        console.log("C&", Ca)
        this.usService.UpdateUser(this.user.data._id, Ca).subscribe(res => {
          Swal.fire({ title: "Updated", icon: "success" })
          this.getuser()
          this.close()

        })
      })



    } else {
      let Ca = new User()
      if (this.name.length > 0 && this.email.length > 0 && this.pass.length > 0) {

    console.log(this.user.data.img)
        Ca.img = this.user.data.img
        Ca.name = this.name
        Ca.password = this.pass
        Ca.email = this.email
        Ca.role=this.user.data.role
        Ca.isEmailConfirmed=true
        Ca.score=this.user.data.score
        Ca.postalcode=this.user.data.postalcode
        this.usService.UpdateUser(this.user.data._id, Ca).subscribe(res => {
          Swal.fire({ title: "Updated", icon: "success" })
          this.getuser()
          this.close()

        })


      }

    }
  }
  get() {
    this.RS.get(this.user.data._id).subscribe(res => {
      this.results = res
      console.log(this.results, 'yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    })
  }
  getuser() {
    this.usService.getOneUser(this.user.data._id).subscribe(res => {
      this.usera = res
    })
  }
}
