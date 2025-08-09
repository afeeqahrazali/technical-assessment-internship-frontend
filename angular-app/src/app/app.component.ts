import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  template: `<h2 class="text-center mt-4">Angular Contact Form</h2>
    <div class="container mt-5" *ngIf="true">
      <app-contact-form></app-contact-form>
    </div>`
})
export class AppComponent {}
