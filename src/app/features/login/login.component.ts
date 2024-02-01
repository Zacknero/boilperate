import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../core/auth/store/auth.reducer';
import * as AuthAction from '../../core/auth/store/auth.action';
import { Credentials } from '../../core/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromAuth.State>,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formLogin = this.fb.group({
      email: [
        'pinocchio@live.it',
        [Validators.pattern(/\S+@\S+\.\S+/), Validators.required],
      ],
      password: ['bugiardo', [Validators.minLength(8), Validators.required]],
    });
  }

  login(): void {
    const user: Credentials = {
      username: this.formLogin?.value.email,
      password: this.formLogin?.value.password,
    };
    this.store.dispatch(AuthAction.trySignIn({ credentials: user }));
  }
}
