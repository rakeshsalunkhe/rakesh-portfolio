import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { popupAnimation } from '../animations/popup-animations'; 

@Component({
  selector: 'app-experience-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-popup.component.html',
  styleUrls: ['./experience-popup.component.css'],
  animations: [popupAnimation]
})
export class ExperiencePopupComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();
  experiences: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.experiences = data.experience || [];
      console.log('Loaded experience:', this.experiences);
    });
  }

  closePopup() {
    this.closed.emit();
  }
}
