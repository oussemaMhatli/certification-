export class User  {
  name: string='';
  email: string='';
  password: string='';
  postalcode: number=0;
  score: number=0;
  Activationcode!: string;
  isEmailConfirmed: boolean=false;
  RegistrationDate!: Date;
  role: number=0;
  _id!:string
  examDate!: Date;
  passedExam!: boolean;
  img!: string;
  Examcode!: string;

}
