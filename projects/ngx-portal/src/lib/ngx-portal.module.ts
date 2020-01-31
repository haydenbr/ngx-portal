import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

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
	],
})
export class NgxPortalModule {}
