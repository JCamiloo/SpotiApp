import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) { 
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data:any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
