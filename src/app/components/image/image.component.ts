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
    toggleComments : boolean
    showMore: boolean
    showMoreButton: string

    constructor() {
        this.toggleComments = false
        this.showMore = false
        this.showMoreButton = "more +"
    }

    ngOnInit(): void {
    }

    incrementLikes() {
        this.image.likes++
    }

    emitToggleCommentsEvent() {
        this.toggleComments = !this.toggleComments
        this.toggleCommentsEvent.emit(this.toggleComments)
    }

    clickShowMore() {
        if(this.showMoreButton == "less -") this.showMoreButton = "more +"
        else this.showMoreButton = "less -"

        this.showMore = !this.showMore
    }
}
