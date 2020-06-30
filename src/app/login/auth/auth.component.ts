import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employe } from 'src/app/models/Employes.models';
import { LoginService } from 'src/app/shared/login.service';
import { SessionService } from 'src/app/shared/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  myForm: FormGroup;
  o = new Employe();
  constructor(
    public service: LoginService, public session: SessionService
    , private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.myForm = this.fb.group({
      email: [this.o.email, [Validators.required, Validators.email]],
      passwd: [this.o.passwd, [Validators.required]],
    });
  }

  submit(myForm) {
    // console.log(myForm.value);
    const o = myForm.value;
    console.log(o);
    // this.snackbar.openMySnackBar('login...');
    // console.log(o);
    this.service.login(o).subscribe((r: any) => {

      if (r.code === 1) {
        this.session.user = r.user;
        this.session.post = r.post;
        this.session.employepost = r.employepost;

        if (r.user.role === 1) {
          this.router.navigate(['/administrateur/']);
          console.log(r);
        } else if (r.user.role === 2) {
          this.router.navigate(['/administrateur/minimenu']);
          console.log(r);
        } else {

          this.router.navigate(['/utilisateur/menu']);
          console.log(r);

        }

      } else {

        console.log('invalid mail ou passeword');
      }

      // return;
      /*
            if (r.code === -1) {
              this.snack.notifyAlert(`Votre email est incorrect`);
            } else if (r.code === 0) {
              this.snack.notifyAlert(`Votre mot de pass est incorrect`);
            } else {
              this.snack.notifyOk(`Binevenue ${r.user.nom}`);
              this.session.doSignIn(r.user, r.token, r.user.role);
              setTimeout(() => this.router.navigate(['/admin']), 500);
            }*/

      // this.router.navigate(['/admin']);
      // if (r) {
      //   this.checkbox.value ? r.rememberMe = 1 : r.rememberMe = 0;
      //   this.session.doSignIn(r);
      //   this.router.navigate(['/concern']);
      //   this.snackbar.dismiss();
      // } else {
      //   this.snackbar.dismiss();
      // }
    });
  }


}
