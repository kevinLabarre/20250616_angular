import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private service: ProductsService) { }

  profileForm = new FormGroup(
    {
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }
  );

  handleSubmit() {
    const test = this.loginError
    console.log("ERROR --> ", test)
    if (this.profileForm.valid) {
      console.log(this.profileForm.value)
    }
  }

  get loginError() {
    const errors = this.profileForm.controls.login.errors

    if (errors) {
      return errors
    } else return {}
  }

  displayLoginRequiredError() {
    const error = this.loginError
    if (error['required']) {
      return true
    } else return false
  }

  get loginTouched() {
    return this.profileForm.controls.login.touched
  }

}
