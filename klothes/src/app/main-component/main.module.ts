import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagComponent } from '../components/bag/bag.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { FooterModule } from '../components/footer/footer.module';
import { GenderSubproductsComponent } from '../components/gender-subproducts/gender-subproducts.component';
import { HeaderComponentModule } from '../components/header-component/header-component.module';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ProductsComponent } from '../components/products/products.component';
import { UserLoginComponent } from '../components/user-login/user-login.component';
import { WishlistComponent } from '../components/wishlist/wishlist.component';
import { HomeComponent } from '../home/home.component';
import { SubProductsDisplayComponent } from '../sub-products-display/sub-products-display.component';
import { MainComponentComponent } from './main-component.component';
import { ProductListComponent } from '../product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'bag', component: BagComponent },
  { path: 'browse/:gender/:subCategory/:product', component: ProductsComponent,pathMatch: 'full' },
  { path: 'browse/:gender', component: ProductsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [MainComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HeaderComponentModule,
    GenderSubproductsComponent,
    SubProductsDisplayComponent,
    FooterModule,
    CategoriesComponent,
    ProductsComponent,
  ],
  exports: [MainComponentComponent],
})
export class MainModule {}
