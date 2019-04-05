import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) { 
    this.loading = true;
    this.spotify.getToken().then(() => {  
      this.spotify.getNewReleases().subscribe((data:any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      });
    });
  }
}
