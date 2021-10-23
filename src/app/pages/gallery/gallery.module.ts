import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    FormsModule
  ]
})
export class GalleryModule { }
