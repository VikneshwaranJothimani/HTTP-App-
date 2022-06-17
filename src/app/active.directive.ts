import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  constructor(public elRef : ElementRef) { }

  @HostListener('click') active()
  {
    this.elRef.nativeElement.active;
  }

}
