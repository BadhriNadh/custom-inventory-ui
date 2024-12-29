import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {AccessApiService} from "../service/access/access-api.service";
import {User} from "../models/user.model";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @Output() loginOnRegisterEvent = new EventEmitter<string>();
  hide = signal(true);

  readonly profileName = new FormControl('', [Validators.required]);
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  errorProfileNameMessage = signal('');
  errorEmailMessage = signal('');
  errorPasswordMessage = signal('');
  registerStatusMessage = signal('');

  constructor(private accessApiService: AccessApiService) {

    merge(this.profileName.statusChanges, this.profileName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateProfileNameErrorMessage();
      });


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

  updateProfileNameErrorMessage() {
    if (this.profileName.hasError('required')) {
      this.errorProfileNameMessage.set('You must enter an profile name');
    }else{
      this.errorProfileNameMessage.set('');
    }
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

  loginOnRegisterClick() {
    this.loginOnRegisterEvent.emit('login');
  }

  onSubmit() {
    if (this.profileName.invalid || this.email.invalid || this.password.invalid) {
      return;
    }

    const user = new User(
      this.profileName.value!,
      this.email.value!,
      this.password.value!
    );

    this.accessApiService.registerUser(user).subscribe({
      next: (response) => {

        if(response.status == 202){
          this.registerStatusMessage.set('user successfully registered 👍')
        }else if(response.status == 409){
          this.registerStatusMessage.set('user already registered no recovery')
        }
      },
      error: (error) => {
        console.log(error)
        if(error.status == 401){
          this.registerStatusMessage.set('user already exists no recovery')
        }
      },
    });
  }
}
