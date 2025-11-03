import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { popupAnimation } from '../animations/popup-animations';

@Component({
  selector: 'app-contact-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-popup.component.html',
  styleUrls: ['./contact-popup.component.css'],
  animations: [popupAnimation]
})
export class ContactPopupComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();
  contact: any;
  copiedField: string | null = null;
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.contact = data.contact || {};
      console.log('Loaded contact:', this.contact);
    });
  }

  copyToClipboard(text: string, field: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedField = field;
      setTimeout(() => (this.copiedField = null), 1500); // reset after 1.5s
    });
  }

  closePopup() {
    this.closed.emit();
  }
}
