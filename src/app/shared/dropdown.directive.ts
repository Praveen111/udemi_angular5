import { Directive, OnInit, Renderer, ElementRef, HostListener } from '@angular/core';
import { HostBinding } from '@angular/core';
//import { ElementRef } from "@angular/core/src/linker/element_ref";


@Directive({
selector :'[appDropdown]'
})

export class DropdownDirective {

  constructor(private eref: ElementRef, private renderer: Renderer) {}
  @HostBinding('class.open') isOpen = false;


   @HostListener('click') toggleOpen(){
      this.isOpen = !this.isOpen;
 }

 @HostListener('mouseenter') toggleClass(eventData: Event) {
  //this.arow.to = 'glyphicon glyphicon-chevron-up'
   this.renderer.setElementClass(this.eref.nativeElement, 'glyphicon.glyphicon-chevron-up', true);
 }

@HostListener('mouseleave') toggleBack( eventData: Event) {
  this.renderer.setElementClass(this.eref.nativeElement, 'glyphicon.glyphicon-chevron-down', true);
}

}
