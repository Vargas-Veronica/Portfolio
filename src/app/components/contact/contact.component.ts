import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitted = false;
  loading = false;
  errorMessage = '';

  async onSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.loading = true;
    this.errorMessage = '';

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => params.append(key, value.toString()));

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (response.ok) {
        this.submitted = true;
        form.reset();
      } else {
        this.errorMessage = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.';
      }
    } catch {
      this.errorMessage = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.';
    } finally {
      this.loading = false;
    }
  }
}
