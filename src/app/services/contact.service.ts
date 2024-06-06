import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../contact/contact.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8080/contact'

  constructor(private http: HttpClient) { }

  create(data: Contact) {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  read() {
    return this.http.get(`${this.apiUrl}`).pipe(
      map(({ _embedded: { contacts } }: any) => {
        return contacts.map((row: any): Contact => {
          return {
            nome: row.nome,
            cpf: row.cpf,
            link: row._links.self.href
          }
        });
      }),

    );
  }

  findById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  update(id: number, data: Contact) {
    return this.http.put(`${this.apiUrl}/update/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
