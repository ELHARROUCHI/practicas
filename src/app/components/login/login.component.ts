import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AppState } from 'src/app/shared/store/app.reducer';
import { UserLogin } from 'src/app/shared/store/login/login.action';

@Component({
  selector: 'zh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public fg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   *
   */
  private initForm(): void {
    this.fg = this.fb.group({
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, [Validators.required, Validators.minLength(3)]],
    });
  }

  /**
   * submit form
   */
  onSubmit(): void {
    const { email, password } = this.fg.value;
    const action = new UserLogin(email, password);
    this.store.dispatch(action);
  }

  /**
   * copyright
   */
  get copyright(): string {
    return String(new Date().getFullYear());
  }

}
