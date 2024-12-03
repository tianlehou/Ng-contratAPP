import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-person-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css'],
})
export class PersonRegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  register() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.authService
      .registerWithEmail(email, password)
      .then(() => {
        alert('Usuario registrado con éxito');
      }).catch((error) => {
        console.error(error);
        alert('Error al registrar');
      });
    }
  }

  registerWithGoogle() {
    this.authService
    .loginWithGoogle()
    .then(() => {
      alert('Autenticado con Google');
    }).catch((error) => {
      console.error(error);
      alert('Error con Google');
    });
  }
}
