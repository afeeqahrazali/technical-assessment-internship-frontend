import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Create the form immediately so it's ready when template renders
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.contactForm.invalid) {
      alert('Please fill all fields correctly.');
      return;
    }

    // Example HTTP POST request
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.contactForm.value)
      .subscribe(response => {
        console.log('Server response:', response);
        alert(
          'Form submitted successfully!\n\n' +
          JSON.stringify(this.contactForm.value, null, 2)
        );
      });
  }
}
