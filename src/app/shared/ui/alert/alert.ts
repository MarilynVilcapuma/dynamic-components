import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

type AlertType = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.scss'
})
export class AlertComponent {
  @Input() type: AlertType = 'info';
  @Input() message = '';
  @Input() closable = true;

  @Output() closed = new EventEmitter<void>();

  onClose() { this.closed.emit(); }
}
