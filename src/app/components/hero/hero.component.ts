import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, ProjectsComponent, ServicesComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
