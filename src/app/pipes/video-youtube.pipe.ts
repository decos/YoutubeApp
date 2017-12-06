import { Pipe, PipeTransform } from '@angular/core';
//Import DomSanitizer
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

  constructor( private domSanatizer:DomSanitizer ){

  }

  transform( value:string ): any {

    let url = "https://www.youtube.com/embed/";

    return this.domSanatizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
