import {Component, OnInit} from '@angular/core';
import {Image} from "../../models/image";
import * as faker from 'faker';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    images: Image[] = []

    constructor() {
        for (let i = 0; i < 10; i++) {
            this.images.push(
                new Image({
                    'path': faker.image.imageUrl(120, 120),
                    'description': faker.lorem.lines(2),
                    'likes': 0,
                    'width': 120,
                    'height': 120
                })
            )
        }
        console.log(this.images)
    }

    ngOnInit(): void {
    }

}
