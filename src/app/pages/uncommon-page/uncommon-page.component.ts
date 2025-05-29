import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';

interface Client {
  name: string;
  gender: string;
  age: number;
  address: string;
}

const client1: Client = {
  name: 'John Doe',
  gender: 'male',
  age: 30,
  address: '123 Main St, Springfield, USA'
};
const client2: Client = {
  name: 'Jane Smith',
  gender: 'female',
  age: 25,
  address: '456 Elm St, Springfield, USA'
};

@Component({
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18nSelect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //i18nPlural
  clients = signal<string[]>(['Juan', 'Pedro', 'María', 'Ana']);
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  }

  deleteClient() {
    this.clients.update(clients => clients.slice(1));
  }

  //KeyValue Pipe
  profile = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St, Springfield, USA',
  }

  //Async Pipe
  promiseValue = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('¡Hola, mundo!');
    }, 2000);
  });
}
