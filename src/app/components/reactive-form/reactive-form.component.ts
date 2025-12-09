import { Component, inject } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  fb= inject(FormBuilder);

  rForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, this.noSpaces]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15), this.noSpaces]],
  })

  submitForm() {
    console.log(this.rForm.value);
    alert(this.rForm.get('email'));
  }

  noSpaces(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.indexOf(' ') >= 0) {
      return { 'noSpaces': true };
    }
    return null
  }

  get email() {
    return this.rForm.get('email');
  }

}
