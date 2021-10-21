import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `gallery`, loadChildren: () =>
      import('./pages/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: `locations`, loadChildren: () =>
      import('./pages/locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: `episodes`, loadChildren: () =>
      import('./pages/episodes/episodes.module').then(m => m.EpisodesModule)
  },
  {
    path: `about`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: `character/:id`, loadChildren: () =>
      import('./pages/character/character.module').then(m => m.CharacterModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
