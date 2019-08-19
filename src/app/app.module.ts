import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { CartasComponent } from './cartas/cartas.component';
import { CartaComponent } from './cartas/carta/carta.component';
import { CartaListaComponent } from './cartas/carta-lista/carta-lista.component';
import {CartaService} from './shared/carta.service';
import {FormsModule} from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {RichTextEditorAllModule} from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  declarations: [
    AppComponent,
    CartasComponent,
    CartaComponent,
    CartaListaComponent
  ],

  // Configuracao da aplicacao com o Firebase, com o RichTextEditor e o FormsModule
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    RichTextEditorAllModule,
  ],
  // injetando o Service na aplicacao
  providers: [CartaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
