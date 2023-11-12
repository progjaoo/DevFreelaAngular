import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ld-wrapper',
  templateUrl: './ld-wrapper.component.html',
  styleUrls: ['./ld-wrapper.component.scss']
})
export class LdWrapperComponent {
  @Input() type: 'one-col' | 'two-col' = 'two-col';
  @Input() back: string = '';

  constructor(private router: Router){}

  redirectTo(url: string){
    this.router.navigateByUrl(url);
  }
}
