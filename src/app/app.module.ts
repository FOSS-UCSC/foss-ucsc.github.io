import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgoHomeComponent } from './views/algo/algo-home/algo-home.component';
import { HomeComponent } from './views/home/home.component';
import { MarkdownModule } from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SecurityContext } from '@angular/core';
import { AlgoContributionComponent } from './views/algo/algo-contribution/algo-contribution.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgoHomeComponent,
    HomeComponent,
    AlgoContributionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
