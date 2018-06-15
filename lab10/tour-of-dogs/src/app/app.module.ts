import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';
import { DogSearchComponent } from './components/dog-search/dog-search.component';
import { DogService } from './services/dog.service';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'add-dog', component: AddDogComponent },
  { path: 'all-dogs', component: DogsComponent },
  { path: 'dog-detail/:id', component: DogDetailComponent },  
];

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogDetailComponent,
    DogSearchComponent,
    AddDogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
