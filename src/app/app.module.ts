import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InventoryModule } from './inventory/inventory.module'
import { ManagerModule } from './manager/manager.module'
import { MaterialModule } from './material.module'
import { PosModule } from './pos/pos.module'
import { UserModule } from './user/user.module'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthService } from './auth/auth.service'
import { InMemoryAuthService } from './auth/auth.inmemory.service'

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,

    InventoryModule,
    PosModule,
    UserModule,
  ],
  providers: [
    {
      provide: AuthService,
      useClass: InMemoryAuthService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
