import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name = '';
  headline = '';
  about: string[] = [];
  isMenuOpen = false;
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    console.log('✅ AboutComponent initialized');
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.name = data.name;
      this.headline = data.headline;
      this.about = data.about || [];
    });
  }

  openSection(section: string) {
  const event = new CustomEvent('openPopup', { detail: section });
  window.dispatchEvent(event);
}
}
