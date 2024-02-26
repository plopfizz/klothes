import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../footer/footer.module';
import { HeaderComponentModule } from '../header/header-component/header-component.module';
import { HomeComponent } from '../home/home.component';
import { KidsComponent } from '../kids/kids.component';
import { MenComponent } from '../men/men.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { WomenComponent } from '../women/women.component';
import { MainComponentComponent } from './main-component.component';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { BagComponent } from '../bag/bag.component';
import { CategoriesComponent } from '../categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'kids', component: KidsComponent },
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
    FooterModule,
    CategoriesComponent
  ],
  exports: [MainComponentComponent],
})
export class MainModule {}
