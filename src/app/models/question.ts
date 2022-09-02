export class Question{
questionText: string='';
img: string='';
zip:string=''
reponse1!: { correct: boolean; text: string };
reponse2!: { correct: boolean; text: string };
reponse3!: { correct: boolean; text: string };
reponse4!: { correct: boolean; text: string };
categorie: string="";
  level!: string;
  type!: number;
}
