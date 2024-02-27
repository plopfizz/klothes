import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagComponent } from '../components/bag/bag.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { FooterModule } from '../components/footer/footer.module';
import { HeaderComponentModule } from '../components/header-component/header-component.module';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ProductsComponent } from '../components/products/products.component';
import { UserLoginComponent } from '../components/user-login/user-login.component';
import { WishlistComponent } from '../components/wishlist/wishlist.component';
import { MainComponentComponent } from './main-component.component';
import { GenderSubproductsComponent } from '../components/gender-subproducts/gender-subproducts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'browse/:type', component: ProductsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'bag', component: BagComponent },

  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [MainComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HeaderComponentModule,
    GenderSubproductsComponent,
    FooterModule,
    CategoriesComponent,
    ProductsComponent,
  ],
  exports: [MainComponentComponent],
})
export class MainModule {}
