import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './content/main/main.component';
import { ItemComponent } from './content/item/item.component';
import { ListComponent } from './content/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
