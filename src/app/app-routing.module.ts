import { MainComponent } from './content/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './content/item/item.component';
import { ListComponent } from './content/list/list.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'item', component: ItemComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
