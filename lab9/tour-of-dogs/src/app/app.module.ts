import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';
import { DogSearchComponent } from './components/dog-search/dog-search.component';
import { DogService } from './services/dog.service';
import { AddDogComponent } from './components/add-dog/add-dog.component';


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
    FormsModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
