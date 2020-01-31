import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'

import { NgxPortalRouterService } from './ngx-portal-router.service'
import { NgxPortalInputComponent } from './ngx-portal-input.component'
import { NgxPortalOutputComponent } from './ngx-portal-output.component'

@NgModule({
	imports: [CommonModule],
	exports: [
		NgxPortalInputComponent,
		NgxPortalOutputComponent
	],
	declarations: [
		NgxPortalInputComponent,
		NgxPortalOutputComponent
	]
})
export class NgxPortalModule {
	static forRoot(): ModuleWithProviders<NgxPortalModule> {
		return {
			ngModule: NgxPortalModule,
			providers: [NgxPortalRouterService]
		}
	}
}
