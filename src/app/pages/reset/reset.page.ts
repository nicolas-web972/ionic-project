import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  email: string ;
  credentials: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.auth.sendPasswordReset(this.email);
    this.email = '';
  }
}
