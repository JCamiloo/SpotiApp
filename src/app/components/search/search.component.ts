import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) {}

  buscar(termino:string) {
    if(termino.trim() === ''){
      this.loading = false;
      this.artistas = [];
    }
    else{
      this.loading = true;
      this.spotify.getToken().then(() => {
        this.spotify.getArtistas(termino).subscribe(data => {
          this.artistas = data;
          this.loading = false;
        });
      });
    }
  }
}
