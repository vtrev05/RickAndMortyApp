import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Character } from '../locations/locations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  characterList: Character[] = [];
  public index = 1;
  constructor(private request: HttpClient) { }
      
  ngOnInit(): void {
    this.request.get<any>('https://rickandmortyapi.com/api/character').subscribe(res => {
      this.characterList = res.results
    })
  }
  nextPage() {
    this.index = this.index + 1
    this.request.get<any>(`https://rickandmortyapi.com/api/character?page=${this.index}`).subscribe(res => {
      this.characterList = res.results
    })
  }
  previousPage() {
    this.index = this.index - 1
    this.request.get<any>(`https://rickandmortyapi.com/api/character?page=${this.index}`).subscribe(res => {
      this.characterList = res.results
    })
  }
}
