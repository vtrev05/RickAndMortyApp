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
  constructor(private request: HttpClient) { }
      
  ngOnInit(): void {
    this.request.get<any>('https://rickandmortyapi.com/api/character').subscribe(res => {
      console.log(res)
      this.characterList = res.results
    })
  }

}
