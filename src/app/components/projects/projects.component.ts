import { Component, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';
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
  isPlaying = false;
  isMuted = false;
  overlayVisible = false;
  overlayImageSrc: string | null = null;
  overlayMaxWidth = '90vw';
  overlayMaxHeight = '90vh';

  // Video modal state
  modalOpen = false;
  modalVideoSrc: string | null = null;
  modalPoster: string | null = null;
  @ViewChild('modalClose', { static: false }) modalClose?: ElementRef<HTMLButtonElement>;

  constructor(private renderer: Renderer2) {}

  private get video(): HTMLVideoElement | null {
    return this.videoRef?.nativeElement ?? null;
  }

  togglePlay(): void {
    const v = this.video;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  }

  toggleMute(): void {
    const v = this.video;
    if (!v) return;
    v.muted = !v.muted;
  }

  restart(): void {
    const v = this.video;
    if (!v) return;
    v.currentTime = 0;
    v.play();
  }

  // Video event handlers to update UI state
  onPlay(): void {
    this.isPlaying = true;
  }

  onPause(): void {
    this.isPlaying = false;
  }

  onVolumeChange(): void {
    const v = this.video;
    if (!v) return;
    this.isMuted = v.muted;
  }

  // Image zoom handlers
  /**
   * Show overlay with the provided image src and optional max width/height.
   * Call from template with the image path: (mouseenter)="showOverlay('/assets/xxx.png','80vw','80vh')"
   */
  showOverlay(src: string, maxWidth?: string, maxHeight?: string): void {
    this.overlayImageSrc = src;
    if (maxWidth) this.overlayMaxWidth = maxWidth;
    if (maxHeight) this.overlayMaxHeight = maxHeight;
    this.overlayVisible = true;
  }

  hideOverlay(): void {
    this.overlayVisible = false;
    // keep src so overlay hides smoothly; clear after a short delay if desired
    // setTimeout(() => this.overlayImageSrc = null, 200);
  }

  // Called when the overlay itself receives mouse enter (to prevent flicker)
  keepOverlay(): void {
    this.overlayVisible = true;
  }

  // Modal methods
  openVideoModal(src: string, poster?: string): void {
    // Respect slow connections (optional): avoid loading heavy videos on 2g
    const connection = (navigator as any).connection;
    if (connection && typeof connection.effectiveType === 'string' && connection.effectiveType.includes('2g')) {
      // don't auto-open heavy videos on very slow connections
      console.log('Connection is slow, skipping auto video load.');
    }
    this.modalVideoSrc = src;
    this.modalPoster = poster ?? null;
    this.modalOpen = true;
    // focus close button for accessibility in next tick
    setTimeout(() => this.modalClose?.nativeElement?.focus(), 0);
  }

  closeModal(): void {
    this.modalOpen = false;
    // release video src to stop downloading
    this.modalVideoSrc = null;
    this.modalPoster = null;
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    if (this.modalOpen) this.closeModal();
  }

  // Safely hide icon images when they fail to load (typed handler for Angular template)
  handleTechIconError(event: Event): void {
    const img = event.target as HTMLImageElement | null;
    if (img) img.style.display = 'none';
  }

  // Projects data - render dynamically in template
  projects = [
    {
      id: 'planet',
      title: 'PLANET SUPERHEROES',
      img: '/assets/planet-superheroes.png',
      demoVideo: '/assets/aceitosos-landing.mp4',
      poster: '/assets/planet-superheroes.png',
      description:
        'Planet Superheroes es una tienda online construida con Angular y Tailwind que ofrece catálogo, filtros, carrito y checkout. Me encargué del frontend, integración con APIs y optimización de assets (imágenes/video), priorizando accesibilidad y rendimiento.',
      tech: ['Angular', 'TypeScript', 'Tailwind', 'Node/Python', 'MySQL'],
      link: 'https://ispc-desarrolladores-2-0.github.io/PFS-Ecommerce-2023/'
    },
    {
      id: 'chancho',
      title: 'CHANCHO VA!',
      img: '/assets/desktop.png',
      demoVideo: '/assets/chancho-va.mp4',
      poster: '/assets/desktop.png',
      description:
        'Chancho Va! es una tienda online de juegos de mesa con catálogo, filtros y carrito. Implementé el frontend con HTML, CSS y Bootstrap y la integración con APIs en Node.js; enfocado en usabilidad móvil y rendimiento.',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'MySQL'],
      link: 'https://ispc-desarrolladores-2-0.github.io/PFS-Ecommerce-2023/'
    },
    {
      id: 'aceitosos',
      title: 'ACEITOSOS',
      img: '/assets/aceitosos.png',
      demoVideo: '/assets/aceitosos-landing.mp4',
      poster: '/assets/aceitosos.png',
      description:
        'Aceitosos es una landing y tienda en desarrollo que incluye versión web y una app Android en progreso. Desarrollé la interfaz con Angular y sigo integrando el backend en Django para gestión de productos; se prioriza experiencia responsive y SEO.',
      tech: ['Angular', 'Django', 'Java (Android)', 'Tailwind', 'MySQL'],
      link: 'https://aceitosos.netlify.app/landing'
    },
    {
      id: 'portfolio',
      title: 'PORTFOLIO',
      img: '/assets/portfolio.png',
      demoVideo: '/assets/aceitosos-landing.mp4',
      poster: '/assets/portfolio.png',
      description:
        'Portfolio personal desarrollado en Angular y Tailwind para mostrar proyectos, demos y datos de contacto. Diseñado para ser responsivo, accesible y fácil de mantener.',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      link: 'https://ispc-desarrolladores-2-0.github.io/PFS-Ecommerce-2023/'
    }
  ];

 
}
