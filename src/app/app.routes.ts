import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { HeroComponent } from './components/hero/hero.component';
export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'projects', component: ProjectsComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
   {
    path:'services',
   component: ServicesComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: '',
    redirectTo: 'hero',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'hero',
  },
 
];
