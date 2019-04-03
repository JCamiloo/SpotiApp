import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
  }

  getNewReleases(){
    const headers = new HttpHeaders({'Authorization':'Bearer BQAK8ba-6dEWzPKt-ViADIr_Py-WDkYPxGfeI6fUkCVeTlu_LTMPIZ8NFH6UUriOQQ7Q2nl7h-sMswMxL24'})
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }

  getArtista(termino:string){
    const headers = new HttpHeaders({'Authorization':'Bearer BQAK8ba-6dEWzPKt-ViADIr_Py-WDkYPxGfeI6fUkCVeTlu_LTMPIZ8NFH6UUriOQQ7Q2nl7h-sMswMxL24'})
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});
  }
}


