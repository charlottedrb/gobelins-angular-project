import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from "../../models/image";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
    @Input() image: Image
    @Output() toggleCommentsEvent = new EventEmitter<boolean>()
    likeIcon = faThumbsUp;
    toggleComments : boolean = false

    constructor() { }

    ngOnInit(): void {
    }

    incrementLikes() {
        this.image.likes++
    }

    emitToggleCommentsEvent() {
        this.toggleComments = !this.toggleComments
        this.toggleCommentsEvent.emit(this.toggleComments)
    }
}
