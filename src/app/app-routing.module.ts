import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
