import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ExperienceComponent } from './components/resume/experience/experience.component';
import { EducationComponent } from './components/resume/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    SocialLinksComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    ResumeComponent,
    ExperienceComponent,
    EducationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
