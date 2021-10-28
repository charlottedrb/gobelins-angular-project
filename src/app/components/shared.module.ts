import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageViewerComponent} from "./image-viewer/image-viewer.component";
import {ImageComponent} from "./image/image.component";
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from "@angular/router";
import {PagesRoutingModule} from "../pages/pages-routing.module";


@NgModule({
    declarations: [ImageViewerComponent, ImageComponent, FormComponent, NavComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
    ],
    exports: [
        ImageViewerComponent,
        ImageComponent,
        FormComponent,
        NavComponent
    ]
})
export class SharedModule {
}
