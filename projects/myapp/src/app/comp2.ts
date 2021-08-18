import {Component, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  template: `<h3 *ngIf="true">comp2</h3>`
})
export class Comp2 {}

@NgModule({
  imports: [CommonModule],
  declarations: [Comp2],
})
export class Comp2Module {}
