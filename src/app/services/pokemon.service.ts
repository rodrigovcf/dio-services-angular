/*
  Esse trata-se de um componente Injetável, em outras palavras,
  esse Service pode ser injetado em um outro componente que utilizará
  de suas funcionalidades.
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {} from 'src/environments/environment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' //Significa que todos os demais componentes possuem acesso a esse service
})
export class PokemonService {
  private baseURL:string = ""
  private pokeData:any

  constructor(private http:HttpClient){
    //Inicializando a baseURL por meio da pokeApi contida no environment
    this.baseURL = environment.pokeApi
  }

  getPokemon(pokemonName:string){
    this.pokeData = this.http.get(`${this.baseURL}${pokemonName}`)
    console.log(this.pokeData)
  }
}
