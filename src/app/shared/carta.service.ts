import { Injectable } from '@angular/core';
// Importando o model Carta
import { Carta } from './carta.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CartaService {
  formData: Carta;
  constructor(private firestore: AngularFirestore) { }

  // Coleta a lista de todas as cartas do firestore
  getCartas() {
    return this.firestore.collection('cartas').snapshotChanges();
  }
}
