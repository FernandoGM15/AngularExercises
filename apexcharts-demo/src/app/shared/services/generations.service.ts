import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';

export interface GenerationResponseI {
  name: string;
  pokemon_species: { name: string; url: string }[];
}
@Injectable({
  providedIn: 'root'
})
export class GenerationsService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/generation';

  constructor(private http: HttpClient) { }

  getGenerations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getGeneration(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  getPokemonCountByGeneration(): Observable<any[]> {
    return this.getGenerations().pipe(
      //usando el operador map, se extraen los resultados de la respuesta y se obtiene un array de todas las generaciones.
      map((response: any) => response.results),
      // Usando el operador mergeMap, se realiza una solicitud HTTP para cada generación de Pokémon. 
      // Se crea un array de solicitudes utilizando el método map, y para cada generación, 
      // se realiza una solicitud HTTP a la URL correspondiente utilizando http.get(). 
      // La respuesta se procesa usando el operador map para obtener la cantidad de especies de Pokémon en cada generación.
      mergeMap((generations: any[]) => {
        const requests = generations.map((generation: any) => {
          return this.http.get(generation.url).pipe(
            map((response: any) => ({
              x: response.name,
              y: response.pokemon_species.length
            }))
          );
        });
        return forkJoin(requests);
      })
    );
  }
}
