import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { WhiteSpaceDirective } from './white-space.directive';
import { BlurDirective } from './blur.directive';
import { HighlightDirective } from './highlight.directive';
import { CopyDirective } from './copy.directive';
import { SubstringPipe } from './substring.pipe';



@NgModule({
  declarations: [
    NavBarComponent,
    WhiteSpaceDirective,
    BlurDirective,
    HighlightDirective,
    CopyDirective,
    SubstringPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
    WhiteSpaceDirective,
    BlurDirective,
    HighlightDirective,
    CopyDirective,
    SubstringPipe
  ]
})
export class SharedModule { }
