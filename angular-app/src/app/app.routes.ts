import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'project',
        loadComponent: () => import('./components/project/all-project/all-project.component').then(x => x.AllProjectComponent)
    },
    {
        path: 'intro',
        loadComponent: () => import('./components/intro/intro.component').then(x => x.IntroComponent)
    },
    {
        path: 'service',
        loadComponent: () => import('./components/service-list/service-list.component').then(x => x.ServiceListComponent)
    },
    {
        path: 'project-detail',
        loadComponent: () => import('./components/project-detail/project-detail.component').then(x => x.ProjectDetailComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact.component').then(x => x.ContactComponent)
    },
    {
        path: 'new',
        loadComponent: () => import('./components/new/new.component').then(x => x.NewComponent)
    },
    {
        path: 'new-detail',
        loadComponent: () => import('./components/new-detail/new-detail.component').then(x => x.NewDetailComponent)
    },
    {
        path: 'update',
        loadComponent: () => import('./components/update/update.component').then(x => x.UpdateComponent)
    },
    {
        path: 'team',
        loadComponent: () => import('./components/intro/intro.component').then(x => x.IntroComponent)
    },
];
