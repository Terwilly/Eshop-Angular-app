import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/partials/nav-bar/nav-bar.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AsideComponent } from './components/eshop/aside/aside.component';
import { ProductsComponent } from './components/eshop/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ButtonComponent } from './components/button/button.component';
import { SingleProductComponent } from './components/eshop/products/single-product/single-product.component';
import { CommandeComponent } from './components/commande/commande.component';
import { LoginComponent } from './components/mon-compte/login/login.component';
import { SignupComponent } from './components/mon-compte/signup/signup.component';
import { PartialsComponent } from './components/partials/partials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    GameComponent,
    EshopComponent,
    MonCompteComponent,
    NotFoundPageComponent,
    AsideComponent,
    ProductsComponent,
    CartComponent,
    ButtonComponent,
    SingleProductComponent,
    CommandeComponent,
    LoginComponent,
    SignupComponent,
    PartialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
