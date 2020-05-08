import { Component, ChangeDetectionStrategy, TemplateRef, Input, OnInit, NgZone } from '@angular/core';
import { Observable, pipe } from 'rxjs'
import { delay, map, tap } from 'rxjs/operators'

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
  @Input() preventChangeAfterCheck = false
  portalContents$: Observable<TemplateRef<any>>

  constructor(
    private portals: NgxPortalRouterService,
  ) { }

  ngOnInit() {
    this.portalContents$ = this.portals
      .getPortal(this.portalKey)
      .pipe(
        this.delayOperator(),
        map(x => x as TemplateRef<any>)
      )
  }

  private delayOperator = () => this.preventChangeAfterCheck ? pipe(delay(0)) : pipe(tap())
}
