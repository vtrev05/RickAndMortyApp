import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Episodes } from '../locations/locations';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodesList: Episodes[] = [];
  constructor(private request: HttpClient) { }

  ngOnInit(): void {
    this.request.get<any>('https://rickandmortyapi.com/api/episode').subscribe(res => {
      console.log(res)
      this.episodesList = res.results
    })
  }

}
