import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { popupAnimation } from '../animations/popup-animations';

@Component({
  selector: 'app-projects-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-popup.component.html',
  styleUrls: ['./project-popup.component.css'],
  animations: [popupAnimation]
})
export class ProjectsPopupComponent implements OnInit {
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();

  projects: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.projects = data.projects || [];
      console.log('Loaded projects:', this.projects);
    });
  }

  closePopup() {
    this.closed.emit();
  }
}
