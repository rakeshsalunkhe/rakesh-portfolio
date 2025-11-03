import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { SkillsPopupComponent } from './skills-popup/skills-popup.component';
import { ProjectsPopupComponent } from './project-popup/project-popup.component';
import { ExperiencePopupComponent } from "./experience-popup/experience-popup.component";
import { ContactPopupComponent } from './contact-popup/contact-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AboutComponent, SkillsPopupComponent, ProjectsPopupComponent, ExperiencePopupComponent, ContactPopupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSkillsPopup = false;
  showProjectsPopup = false;
  showExperiencePopup = false;
  showContactPopup = false;
  ngOnInit() {
    window.addEventListener('openPopup', (e: any) => {
      const section = e.detail;
      this.closeAllPopups();
      if (section === 'skills') this.showSkillsPopup = true;
      if (section === 'projects') this.showProjectsPopup = true;
      if (section === 'experience') this.showExperiencePopup = true;
      if (section === 'contact') this.showContactPopup = true;
       console.log(`Opening popup: ${section}`);
    });

    window.addEventListener('closePopup', () => this.closeAllPopups());     
  }

  closeAllPopups() {
    this.showSkillsPopup = false;
    this.showProjectsPopup = false;
    this.showExperiencePopup = false;
    this.showContactPopup = false;
  }
}
