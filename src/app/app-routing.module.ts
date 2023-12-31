import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FoodPageComponent} from "./food-page/food-page.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'search/:searchTerm',
    component: HomeComponent
  },
  { path: 'tag/:tag',
    component: HomeComponent
  },
  { path: 'food/:id',
    component: FoodPageComponent
  },
  { path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
