import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardViewComponent } from './card-view/card-view.component';
import { NotfounfComponent } from './notfounf/notfounf.component';

const routes: Routes = [
{
  path: '',
  component: CardsComponent,

},
{
  path: 'view-card/:id',
  component: CardViewComponent,
},
{
  path: '**',
  component: NotfounfComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
