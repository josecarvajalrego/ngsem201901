import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FootergitComponent } from './footergit/footergit.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, FootergitComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, FooterComponent]
})
export class SharedModule { }
