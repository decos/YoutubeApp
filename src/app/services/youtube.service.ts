import { Injectable } from '@angular/core';
//Import HTTP Module
import { Http, URLSearchParams } from '@angular/http';
//Import rxjs/Rx
import 'rxjs/Rx' ;

@Injectable()
export class YoutubeService {

  private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
  private apikey:string = "AIzaSyAtedwHHBW7t6ywRgj3VE_wjA_sk52rXuQ";
  private playlist:string = "LLfM5rGQDqT6U3OmEYD-QV2Q";

  private nextPageToken:string = "";

  constructor(public http:Http) { }

  getVideos(){
    let url = `${ this.youtubeUrl }/playlistItems`;
    let params = new URLSearchParams();

    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playlist);
    params.set('key', this.apikey);

    return this.http.get( url, { search:params } )
                .map( res => {
                  console.log("getVideos: " , res.json() );
                  this.nextPageToken = res.json().nextPageToken;

                  let videos:any[] = [];
                  for( let video of res.json().items ){
                    let snippet = video.snippet;
                    videos.push(snippet);
                  }

                  return videos;
                })
  }

}
