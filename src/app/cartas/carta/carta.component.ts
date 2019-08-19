import { Component, OnInit } from '@angular/core';
import {CartaService} from '../../shared/carta.service';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
// Utilizando o mesmo Servico e o AngularFirestore
  constructor(private service: CartaService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
// inciando a aplicacao com o form em branco!
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      textoCarta: '',
    };
  }
// funcao para submeter e atualizar
  onSubmit(form: NgForm) {
    let data: any;
    data = Object.assign({}, form.value);
    delete data.id;
    // A operacao eh determinada pelo ID se vazia adiciona a colecao do firestore
    // se nao ela autaliza o ID repassado
    if (form.value.id == null) {
      this.firestore.collection('cartas').add(data);
    } else {
      this.firestore.doc('cartas/' + form.value.id).update(data);
    }
    this.resetForm(form);
  }

}
