import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = "";

  constructor(private http: HttpClient) { 
  }

  getToken(){
    return new Promise((resolve) => {
      this.http.get('https://spotify-get-token.herokuapp.com/spotify/a097f2b074f04b1fb725570498f439a3/cff7d005915640dfbbd9aaf02dae0523')
      .subscribe(data => {
        this.token = data['access_token']
        resolve();
      });
    });
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({'Authorization':'Bearer ' + this.token});
    return this.http.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?country=CO&limit=24').pipe(map(data => data['albums'].items));
  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data => data['tracks']));
  }
}


