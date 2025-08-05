import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) return;

    this.loading = true;
    const { email, password } = this.loginForm.value;

    // Simulation asynchrone locale (pas de service)
    setTimeout(() => {
      this.loading = false;
      if (password === 'secret123') {
        alert(`Connexion simulée 🎉\nUtilisateur : ${email}`);
        this.loginForm.reset({ rememberMe: false });
        this.submitted = false;
      } else {
        this.error = 'Email ou mot de passe incorrect.';
      }
    }, 700);
  }
}
