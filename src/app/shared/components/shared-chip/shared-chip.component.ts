import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-shared-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-chip.component.html',
  styleUrl: `./shared-chip.component.scss`
})
export class SharedChipComponent {
  @Input() color: 'primary' | 'success' | 'error' | 'warning' = 'primary';
}
