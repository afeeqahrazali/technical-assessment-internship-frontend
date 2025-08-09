import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitted = false;
  responseMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.responseMessage = '';
    if (this.contactForm.invalid) {
      return;
    }
    // Example HTTP POST
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.contactForm.value)
      .subscribe({
        next: (res) => {
          this.responseMessage = 'Message sent successfully!';
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (err) => {
          this.responseMessage = 'Failed to send message.';
        }
      });
  }
}
