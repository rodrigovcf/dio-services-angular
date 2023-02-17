/*
  Esse trata-se de um componente Injetável, em outras palavras,
  esse Service pode ser injetado em um outro componente que utilizará
  de suas funcionalidades.
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Significa que todos os demais componentes possuem acesso a esse service
})
export class PokemonService {

  constructor() { }

  getPokemon(pokemonName:string){
    console.log(pokemonName)
  }
}
