import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  transform(value: string): any {
    let id = value.split(':')[2];
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/embed/track/${id}`);
  }

}
