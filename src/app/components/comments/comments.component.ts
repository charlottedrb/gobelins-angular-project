import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../../models/comment";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    comments: Comment[]
    content: string
    sendIcon = faPaperPlane
    @Output() addCommentEvent = new EventEmitter<Comment>()

    constructor() {
    }

    ngOnInit(): void {

    }

    addComment(content:string) {
        console.log(this.comments)
        if(this.comments == undefined) this.comments = []

        if(content != '') {
            this.comments.push(new Comment({
                content: content, createdAt: new Date()
            }))
        }
    }
}
