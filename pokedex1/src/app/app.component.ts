import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  openModal: boolean = false;
  novoId: any;
  novoImg: any;
  novoName: any;
  novoType: any;
  novoHeight: any;
  novoWeight: any;
  novoSpawnTime: any;
  novoWeakness: any;

  title = 'pokedex';
  public pokemons?: Observable<any>;
  firstName!: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.pokemons = this.http.get(
      'https://cors-anywhere.herokuapp.com/www.canalti.com.br/api/pokemons.json'
    );
  }
  loadPokemon(
    id: any,
    img: any,
    name: any,
    type: any,
    height: any,
    weight: any,
    spawn_time: any,
    weaknesses: any
  ) {
    this.novoId = id;
    this.novoImg = img;
    this.novoName = name;
    this.novoType = type;
    this.novoHeight = height;
    this.novoWeight = weight;
    this.novoSpawnTime = spawn_time;
    this.novoWeakness = weaknesses;
    this.openModal = true;
  }
}
