import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageViewerComponent} from "./image-viewer/image-viewer.component";
import {ImageComponent} from "./image/image.component";
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import {PagesRoutingModule} from "../pages/pages-routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';
import {TruncateTextPipe} from "../pipes/truncate-text.pipe";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [ImageViewerComponent, ImageComponent, FormComponent, NavComponent, CommentsComponent, CommentComponent, TruncateTextPipe],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FontAwesomeModule,
        ReactiveFormsModule,
    ],
    exports: [
        ImageViewerComponent,
        ImageComponent,
        FormComponent,
        NavComponent,
        TruncateTextPipe
    ]
})
export class SharedModule {
}
