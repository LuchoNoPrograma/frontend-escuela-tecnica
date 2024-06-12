import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-shared-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-chip.component.html',
  styles: ``
})
export class SharedChipComponent {
  @Input() color: 'primary' | 'success' | 'error' | 'warning' = 'primary';

  colorClasses = {
    primary: 'bg-primary-50 border-primary-500 text-primary-500',
    success: 'bg-success-50 border-success-500 text-success-500',
    error: 'bg-error-50 border-error-500 text-error-500',
    warning: 'bg-warning-50 border-warning-500 text-warning-500'
  };

  getChipClasses() {
    const defaultClasses = 'border-2 p-2 rounded-3xl font-bold text-2xs text-center inline-block';

    // Obtén las clases de Tailwind CSS para el color actual
    const classes = this.colorClasses[this.color] || this.colorClasses['primary'];

    return `${defaultClasses} ${classes}`;
  }
}
