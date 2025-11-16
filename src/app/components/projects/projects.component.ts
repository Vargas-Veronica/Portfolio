import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @ViewChild('projectVideo', { static: false }) videoRef?: ElementRef<HTMLVideoElement>;
  @ViewChild('imgContainer', { static: false }) imgContainer?: ElementRef<HTMLDivElement>;
  overlayVisible = false;
  overlayImageSrc: string | null = null;
  // Make overlay a bit larger by default so images don't appear cropped
  overlayMaxWidth = '95vw';
  overlayMaxHeight = '95vh';

  // small timeout id to avoid flicker when moving between thumbnail and overlay
  private _overlayHideTimeout: any = null;

  // Image overlay handlers (with small debounce on hide to prevent flicker)
  showOverlay(src: string, maxWidth?: string, maxHeight?: string): void {
    if (this._overlayHideTimeout) {
      clearTimeout(this._overlayHideTimeout);
      this._overlayHideTimeout = null;
    }
    this.overlayImageSrc = src;
    if (maxWidth) this.overlayMaxWidth = maxWidth;
    if (maxHeight) this.overlayMaxHeight = maxHeight;
    this.overlayVisible = true;
  }

  hideOverlay(): void {
    // delay hiding so quick mouse moves don't flicker the overlay
    if (this._overlayHideTimeout) clearTimeout(this._overlayHideTimeout);
    this._overlayHideTimeout = setTimeout(() => {
      this.overlayVisible = false;
      this._overlayHideTimeout = null;
    }, 160);
  }

  keepOverlay(): void {
    if (this._overlayHideTimeout) {
      clearTimeout(this._overlayHideTimeout);
      this._overlayHideTimeout = null;
    }
    this.overlayVisible = true;
  }

  // Projects data - render dynamically in template
  projects = [
    {
      id: 'planet',
      title: 'PLANET SUPERHEROES',
      img: '/assets/planet-superheroes.png',
      description:
        'Planet Superheroes es una tienda online construida con Angular y Tailwind que ofrece catálogo, filtros, carrito y checkout. Me encargué del frontend, integración con APIs y optimización de assets (imágenes/video), priorizando accesibilidad y rendimiento.',
      tech: ['Angular', 'TypeScript', 'Tailwind', 'Node/Python', 'MySQL'],
      link: 'https://ispc-desarrolladores-2-0.github.io/PFS-Ecommerce-2023/'
    },
    {
      id: 'chancho',
      title: 'CHANCHO VA!',
      img: '/assets/desktop.png',
      description:
        'Chancho Va! es una tienda online de juegos de mesa con catálogo, filtros y carrito. Implementé el frontend con HTML, CSS y Bootstrap y la integración con APIs en Node.js; enfocado en usabilidad móvil y rendimiento.',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'MySQL'],
      link: 'https://ispc-desarrolladores-2-0.github.io/PFS-Ecommerce-2023/'
    },
    {
      id: 'aceitosos',
      title: 'ACEITOSOS',
      img: '/assets/aceitosos.png',
      description:
        'Aceitosos es una landing y tienda en desarrollo que incluye versión web y una app Android en progreso. Desarrollé la interfaz con Angular y sigo integrando el backend en Django para gestión de productos; se prioriza experiencia responsive y SEO.',
      tech: ['Angular', 'Django', 'Java (Android)', 'Tailwind', 'MySQL'],
      link: 'https://aceitosos.netlify.app/landing'
    },
    {
      id: 'portfolio',
      title: 'PORTFOLIO',
      img: '/assets/portfolio.png',
      description:
        'Portfolio personal desarrollado en Angular y Tailwind para mostrar proyectos, demos y datos de contacto. Diseñado para ser responsivo, accesible y fácil de mantener.',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      link: 'https://ispc-desarrolladores-2-0.github.io/PFS-Ecommerce-2023/'
    }
  ];

 
}
