import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.scss'
})
export class CustomButtonComponent {
  @Input() label = 'Button';
  @Input() variant: Variant = 'primary';
  @Input() size: Size = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' = 'button';

  @Output() clicked = new EventEmitter<MouseEvent>();

  onClick(e: MouseEvent) {
    if (!this.disabled) this.clicked.emit(e);
  }
}
