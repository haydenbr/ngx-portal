import { Injectable, TemplateRef } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class NgxPortalRouterService {
  private portals: {
    [portalKey: string]: BehaviorSubject<TemplateRef<any>>
  } = {}
  
  publishToPortal(portalKey: string, template: TemplateRef<any>) {
    this._getPortal(portalKey).next(template);
  }

  getPortal(portalKey: string) {
    return this._getPortal(portalKey).asObservable();
  }

  clearPortal(portalKey: string) {
		this._getPortal(portalKey).next(undefined);
	}

  private _getPortal(portalKey: string) {
    let portal$ = this.portals[portalKey];

    if (!portal$) {
      
      portal$ = new BehaviorSubject<TemplateRef<any>>(undefined);
      this.portals[portalKey] = portal$;
    }

    return portal$;
  }
}
