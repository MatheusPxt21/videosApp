import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  linguagem = 'pt-BR';
  private apiURL = 'https://api.themoviedb.org/3/';

  private key = '?api_key=9681489e47460362d9502f62e9f73c08';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros():Observable<IListaGenero>{
    const url = `${this.apiURL}gente/movie/list${this.key}&language=${this.linguagem}`;

    return this.http.get<IListaGenero>(url)
      map(retorno => retorno),
      catchError(erro => this.ExibirToastDeErro());

  }

  async ExibirToastDeErro() {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }

}
