Portfolio Personal
Sitio web de portafolio personal construido con Angular 18, Tailwind CSS y Flowbite. El proyecto está pensado como una landing / portafolio profesional con secciones de presentación, servicios, proyectos y contacto.

Tecnologías
Angular 18
TypeScript
Tailwind CSS
Flowbite
RxJS
Netlify (configuración de despliegue)
Karma + Jasmine para pruebas
Características
SPA con enrutamiento y navegación basada en componentes
Diseño responsive con Tailwind CSS
Secciones principales:
Hero
About
Services
Projects
Contact
Header
Footer
Formulario de contacto con integración Netlify Forms
Scroll automático al navegar entre rutas
Configuración de build y despliegue para Netlify (netlify.toml)
Estructura principal del proyecto
app.component.ts
app.component.html
app.routes.ts
header
hero
about
services
projects
contact
footer
styles.css
netlify.toml
Instalación
Desarrollo local
Luego abrir:

Build de producción
El resultado se genera en:

Pruebas
Despliegue en Netlify
El proyecto ya incluye configuración para Netlify en netlify.toml:

build command: ng build
publish directory: dist/portfolio/browser
redirect all paths a index.html para SPA
Notas
El formulario de contacto usa data-netlify="true" y el archivo __forms.html para la integración con Netlify Forms.
La aplicación usa componentes standalone de Angular y RouterOutlet para enrutar las secciones.
Cómo contribuir
Clonar el repositorio
Ejecutar npm install
Crear una rama con el cambio
Probar localmente con npm start
Abrir un PR describiendo la mejora




