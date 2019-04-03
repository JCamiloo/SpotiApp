import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas:any[] = []

  constructor(private spotify:SpotifyService) { }

  buscar(termino:string) {
    this.spotify.getArtista(termino).subscribe((data:any) => this.artistas = data['artists']['items']);
  }

}
