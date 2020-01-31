import { Component, ChangeDetectionStrategy, TemplateRef, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { NgxPortalRouterService } from './ngx-portal-router.service'

@Component({
  selector: 'ngx-portal-output',
  template: `
    <ng-container *ngIf="portalContents$">
      <ng-container
        *ngTemplateOutlet="portalContents$ | async"
      ></ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPortalOutputComponent implements OnInit {
  @Input() portalKey: string;
  portalContents$: Observable<TemplateRef<any>>

  constructor(private portals: NgxPortalRouterService) {}

  ngOnInit() {
    this.portalContents$ = this.portals.getPortal(this.portalKey)
  }
}
