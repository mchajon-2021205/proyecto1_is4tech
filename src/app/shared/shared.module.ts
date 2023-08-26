import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { WhiteSpaceDirective } from './white-space.directive';

@NgModule({
  declarations: [NavBarComponent, WhiteSpaceDirective],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, WhiteSpaceDirective]
})
export class SharedModule {}
