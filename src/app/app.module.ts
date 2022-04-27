import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp } from "firebase/app";

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';

import { firebaseConfig } from 'src/environments/environment';
import { LoaderComponent } from './_shared/modals/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SocialProofComponent } from './social-proof/social-proof.component';

const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectItemComponent,
    LoaderComponent,
    FooterComponent,
    SocialProofComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
