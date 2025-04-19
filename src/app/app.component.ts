import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./core/includes/main-header/main-header.component";
import { MainFooterComponent } from "./core/includes/main-footer/main-footer.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";

@Component({
  selector: 'app-root',
  imports: [
    MainHeaderComponent,
    MainFooterComponent,
    HeroComponent,
    ExperienceComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
