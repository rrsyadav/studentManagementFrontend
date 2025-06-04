import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { StudentComponent } from './app/student/student.component';
import { Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SearchstudentComponent } from './app/searchstudent/searchstudent.component';
import { AddstudentComponent } from './app/addstudent/addstudent.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'searchstudent', component: SearchstudentComponent },
  { path: 'addstudent', component: AddstudentComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  ]
}).catch(err => console.error(err));
