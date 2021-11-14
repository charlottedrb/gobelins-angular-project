import {Component, Input, OnInit} from '@angular/core';
import {ImageComponent} from "../image/image.component";
import {Image} from "../../models/image";

@Component({
    selector: 'app-image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
    @Input() images: Image[]
    @Input() title: string

    constructor() {}

    ngOnInit(): void {
    }

}
