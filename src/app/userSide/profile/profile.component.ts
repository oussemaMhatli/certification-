import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import jwt_decode from "jwt-decode";
import {User} from "../../models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user!:any
  fileUrl="http://localhost:3000/file/get/";
  name!: string;
  img!: string;
  email!: string;
  pass!: string;
  @ViewChild('edit', { static: false }) myModal1!: ElementRef;
  elm1!: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem('mariemmariem');

    if(token) {
      let decoded = jwt_decode(token);

      this.user=decoded;
      console.log(this.user.data,'7ata')
    }
  }

  onImageUpload(event: any) {
    this.img = event.target.files[0];

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

  }
}
