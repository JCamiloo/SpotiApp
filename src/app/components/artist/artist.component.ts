import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista:any = {};
  topTracks:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.getArtista(data['id']);
      this.getTopTracks(data['id']);
    });
  }

  getArtista(id:string){
    this.loading = true;
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista
      this.loading = false;
    });
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
      console.log(this.topTracks);
    });
  }
}
