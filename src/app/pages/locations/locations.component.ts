import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Location } from '../locations/locations';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locationList: Location[] = [];
  constructor(private request: HttpClient) { }

  ngOnInit(): void {
    this.request.get<any>('https://rickandmortyapi.com/api/location').subscribe(res => {
      console.log(res)
      this.locationList = res.results
    })
  }

}
