import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageViewerComponent} from "./image-viewer/image-viewer.component";
import {ImageComponent} from "./image/image.component";
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from "@angular/router";
import {PagesRoutingModule} from "../pages/pages-routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';


@NgModule({
    declarations: [ImageViewerComponent, ImageComponent, FormComponent, NavComponent, CommentsComponent, CommentComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FontAwesomeModule,
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
