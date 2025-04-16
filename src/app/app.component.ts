import { Component } from '@angular/core';
import { SnackManagerComponent } from './snack-manager/snack-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SnackManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ikwillem';
}
