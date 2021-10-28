import {Component, Input, OnInit} from '@angular/core';
import {ImageComponent} from "../image/image.component";

@Component({
    selector: 'app-image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
    @Input() images: any

    constructor() {}

    ngOnInit(): void {
    }

}
