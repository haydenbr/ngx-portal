import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, Input, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs'

import { NgxPortalRouterService } from './ngx-portal-router.service'

@Component({
  selector: 'ngx-portal-input',
  template: `
    <ng-template #inputTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPortalInputComponent implements AfterViewInit {
  @Input() portalKey: string;
  @ViewChild('inputTemplate', { static: false })
  inputTemplate: TemplateRef<any>

  constructor(private portals: NgxPortalRouterService) {}

  ngAfterViewInit() {
    this.portals.publishToPortal(
      this.portalKey,
      this.inputTemplate
    )
  }
}