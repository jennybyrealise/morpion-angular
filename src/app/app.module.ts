import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { PlayersNameComponent } from './players-name/players-name.component';
import { SquaresComponent } from './squares/squares.component';
import { GridComponent } from './grid/grid.component';
import { PlayersComponent } from './players/players.component';
import { CupComponent } from './cup/cup.component';
import { WinnerComponent } from './winner/winner.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ResultComponent } from './result/result.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



/* creer un tableau de constantes qui contient les paths */
const appRoutes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'result', component: ResultComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PlayersNameComponent,
    SquaresComponent,
    GridComponent,
    PlayersComponent,
    CupComponent,
    WinnerComponent,
    HomeComponent,
    GameComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
