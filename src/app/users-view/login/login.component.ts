import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {merge} from "rxjs";
import {AccessApiService} from "../service/access/access-api.service";
import {ApiResponse} from "../response-models/api-response";
import {LoginData} from "../response-models/login-data";
import {User} from "../request-models/user";
import {SessionStorageService} from "../../memory/session-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginEvent = new EventEmitter();
  @Output() openRegisterEvent = new EventEmitter();

  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  errorEmailMessage = signal('');
  errorPasswordMessage = signal('');
  loginStatusMessage = signal('');

  hide = signal(true);

  constructor(private accessApiService: AccessApiService, private sessionStorageService: SessionStorageService) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateEmailErrorMessage();
      });

    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updatePasswordErrorMessage();
      });
  }

  updateEmailErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorEmailMessage.set('You must enter an email');
    } else if (this.email.hasError('email')) {
      this.errorEmailMessage.set('Not a valid email');
    }else{
      this.errorEmailMessage.set('');
    }
  }

  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.errorPasswordMessage.set('You must enter a password');
    } else if (this.password.hasError('minlength')) {
      this.errorPasswordMessage.set('Password must be 8 or more characters');
    }else{
      this.errorPasswordMessage.set('');
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginClick() {

    if (this.email.invalid || this.password.invalid) {
      return;
    }

    const user: User = {
      profileName: null,
      userName: this.email.value!,
      password: this.password.value!
    };

    this.accessApiService.loginUser(user).subscribe({
      next: (response: ApiResponse<LoginData>) => {
        if (response.status === 202) {
          if (this.sessionStorageService.saveLoginData(response.data?.token, response.data?.userId)) {
            this.loginEvent.emit();
          } else {
            this.loginStatusMessage.set('Please try again later');
          }
        } else {
          this.loginStatusMessage.set('Please try again later');
        }
      },
      error: (error) => {
        if (error.status === 401) {
          this.loginStatusMessage.set('❌ wrong user name or password')
        }else{
          this.loginStatusMessage.set('please try after some time')
        }
      },
    });
  }

  openRegisterClick() {
    this.openRegisterEvent.emit();
  }
}
