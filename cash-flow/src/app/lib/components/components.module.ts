import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './nav/title/title.component';
import { UserLoginComponent } from './nav/user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavComponent, FooterComponent, TitleComponent, UserLoginComponent],
  exports: [NavComponent, FooterComponent]
})
export class ComponentsModule { }
