import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { popupAnimation } from '../animations/popup-animations';

@Component({
  selector: 'app-skills-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-popup.component.html',
  styleUrls: ['./skills-popup.component.css'],
  animations: [popupAnimation]
})
export class SkillsPopupComponent implements OnInit {
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();
  skills: string[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.skills = data.skills || [];
      console.log('Loaded skills:', this.skills);
    });
  }

  closePopup() {
    this.closed.emit();
    console.log("popup close emit")
  }

}
