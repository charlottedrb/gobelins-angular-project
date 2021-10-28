import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './feed/feed.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {AppModule} from "../app.module";
import {SharedModule} from "../components/shared.module";


@NgModule({
    declarations: [ FeedComponent ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule
    ],
})
export class PagesModule {
}
