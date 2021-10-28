import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeedComponent} from "./feed/feed.component";
import {FormComponent} from "../components/form/form.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full'
    },
    {
        path: 'feed',
        component: FeedComponent
    },
    {
        path: 'form',
        component: FormComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
