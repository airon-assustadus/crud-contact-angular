import { Component } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ContactService],
})
export class AppComponent {
  title = 'crud-contact-angular';
}
