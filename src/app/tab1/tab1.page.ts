import { IGenero } from './../models/IGenero.model';
import { IListaFilmes, IFilmeApi } from './../models/IFilmeAPI.model';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FilmeService } from '../services/filme.service';
import { GeneroService } from '../services/genero.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  titulo = 'Filmes';


  listaVideos: IFilme[] = [
    {
      poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/65NBNqJiaHeCmqDqkCmrRplJXw.jpg',
      nome: 'Gato de Botas 2: O Último Pedido (2022)',
      lancamento: '05/01/2023 (BR)',
      duracao: '1h 43m',
      generos: ['Animação', 'Ação', 'Aventura', 'Comédia', 'Família', 'Fantasia'],
      classificacao: 86,

      pagina: '/gato-de-botas',
    },
    {
      poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mbYQLLluS651W89jO7MOZcLSCUw.jpg',
      nome: 'Avatar: O Caminho da Água (2022)',
      lancamento: '15/12/2022 (BR)',
      duracao: '3h 12m',
      generos: ['Ficção científica', 'Aventura', 'Ação'],
      classificacao: 77,

      pagina: '/avatar-caminho-da-agua'
    }
  ];

  listaFilmes!: IListaFilmes;

  generos: string[] = [];



  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router,
    public filmeService: FilmeService,
    public generoService: GeneroService

    ) {}


  buscarFilmes(evento: any){
    console.log(evento.target.value);
    const busca = evento.target.value;
    if(busca && busca.trim() !== ''){
      this.filmeService.buscarFilmes(busca).subscribe(dados=>{
        console.log(dados);
        this.listaFilmes = dados;
      })
    }
  }

    exibirFilme(filme: IFilmeApi){
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

  async AlertaCurtirFilme() {
    const alert = await this.alertController.create({
      header: 'Alerta de Confirmação!',
      message: 'Realmente deseja CURTIR esse filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, CURTIR',
          handler: () => {
            //console.log('Confirm Okay');
            this.presentToast();
          },
        },
      ],
    });

    await alert.present();
  }


  async AlertaDescurtirFilme() {
    const alert = await this.alertController.create({
      header: 'Alerta de Confirmação!',
      message: 'Realmente deseja DESCURTIR esse filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, DESCURTIR',
          handler: () => {
            /*console.log('Confirm Okay');*/
            this.presentToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Solicitação Confirmada',
      duration: 2000,
      animated: true,
      color: 'light',
      position: 'bottom'


    });
    toast.present();
  }


  ngOnInit(){
    this.generoService.buscarGeneros().subscribe(dados =>{
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);

    });
  }

}
