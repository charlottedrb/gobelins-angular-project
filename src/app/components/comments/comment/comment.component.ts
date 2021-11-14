import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../models/comment'

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    @Input() comment: Comment
    formattedDate: string

    constructor() {
    }

    ngOnInit(): void {
        this.formattedDate = 'on ' + this.comment.createdAt.getDate() + '/' +
            (this.comment.createdAt.getMonth() + 1) + '/' +
            this.comment.createdAt.getFullYear() + ' at ' +
            this.comment.createdAt.getHours() + ':' + this.comment.createdAt.getMinutes()
    }

}
