import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  validationUserMessage = {
    email:[
      {type:"required", message:"Merci de remplir de champs e-mail"},
      {type:"pattern", message:"L'e-mail est incorrect. Veuillez réessayer"}
    ],
    password:[
      {type:"required", message:"Merci de remplir de champs mot de passe"},
      {type:"minlength", message:"Le mot de passe doit avoir au moins 5 caractères"}
    ]
  };

  validationFormUser: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }
}
