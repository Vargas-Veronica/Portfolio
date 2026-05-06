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

  onSubmit() {
    alert('¡Mensaje enviado exitosamente! Gracias por contactarme.');
    // Aquí puedes agregar lógica para enviar el email si tienes un backend
  }

}
