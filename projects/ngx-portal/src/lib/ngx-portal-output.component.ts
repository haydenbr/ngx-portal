import { Component, ChangeDetectionStrategy, TemplateRef, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { NgxPortalRouterService } from './ngx-portal-router.service'

@Component({
  selector: 'ngx-portal-output',
  template: `
    <ng-container
      *ngTemplateOutlet="portalContents$ | async"
    ></ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPortalOutputComponent {
  @Input() portalKey: string;
  portalContents$ = this.portals.getPortal(this.portalKey)

  constructor(private portals: NgxPortalRouterService) {}
}
