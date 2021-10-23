import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Location } from '../../shared/model/shared';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locationList: Location[] = [];
  public index = 1;
  constructor(private request: HttpClient) { }

  ngOnInit(): void {
    this.request.get<any>('https://rickandmortyapi.com/api/location').subscribe(finalResults => {
      console.log(finalResults)
      this.locationList = finalResults.results
    })
  }
  nextPage() {
    this.index = this.index + 1
    this.request.get<any>(`https://rickandmortyapi.com/api/location?page=${this.index}`).subscribe(finalResults => {
      this.locationList = finalResults.results
    })
  }
  previousPage() {
    this.index = this.index - 1
    this.request.get<any>(`https://rickandmortyapi.com/api/location?page=${this.index}`).subscribe(finalResults => {
      this.locationList = finalResults.results
    })
  }
}
