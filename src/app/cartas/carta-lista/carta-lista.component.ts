import { Component, OnInit } from '@angular/core';
import {Carta} from '../../shared/carta.model';
import {CartaService} from '../../shared/carta.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-carta-lista',
  templateUrl: './carta-lista.component.html',
  styleUrls: ['./carta-lista.component.css']
})
export class CartaListaComponent implements OnInit {
// Colecao das cartas
  list: Carta [];
  constructor(private service: CartaService, private firestore: AngularFirestore) { }

  // funcao getCartas do CartaService
  // Lista as cartas num array parametrizados
  ngOnInit() {
    this.service.getCartas().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Carta;
      });
    });
  }
// Editando a Carta
  onEdit(crt: Carta) {
    this.service.formData = Object.assign({}, crt);
  }
// Deletando a Carta
  onDelete(id: string) {
    if (confirm('Tem certeza que deseja excluir esta carta?')) {
      this.firestore.doc('cartas/' + id).delete();
    }
  }
}
