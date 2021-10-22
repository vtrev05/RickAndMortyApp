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
  public index = 1;
  constructor(private request: HttpClient) { }

  ngOnInit(): void {
    this.request.get<any>('https://rickandmortyapi.com/api/episode').subscribe(res => {
      this.episodesList = res.results
    })
  }
  nextPage() {
    this.index = this.index + 1
    this.request.get<any>(`https://rickandmortyapi.com/api/episode?page=${this.index}`).subscribe(res => {
      this.episodesList = res.results
    })
  }
  previousPage() {
    this.index = this.index - 1
    this.request.get<any>(`https://rickandmortyapi.com/api/episode?page=${this.index}`).subscribe(res => {
      this.episodesList = res.results
    })
  }
}
