import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './pages/users/users.module';
import { UsersSignalsComponent } from './pages/users-signals/users-signals.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    UsersSignalsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
