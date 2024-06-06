import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from './contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private contactService: ContactService) { }

  data: Contact = {
    nome: '',
    cpf: '000.000.000-00'
  }

  items: Array<Contact> = []

  ngOnInit(): void {
    this.read()
  }

  create(data: any) {
    this.contactService.create(data).subscribe((response) => {
      console.log(response);
    });
  }

  read() {
    this.contactService.read().subscribe((response) => {
      this.items = response;
    });
  }

  update(id: number = 0, data: any) {
    this.contactService.update(id, data).subscribe((response) => {
      console.log(response);
    });
  }

  delete(id: number = 0) {
    this.contactService.delete(id).subscribe((response) => {
      console.log(response);
    });
  }

}
