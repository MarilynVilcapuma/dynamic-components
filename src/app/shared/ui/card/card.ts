import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageUrl?: string;
}
