import {Component, OnInit} from '@angular/core';
import {Image} from "../../models/image";
import * as faker from 'faker';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    firstSetImages: Image[] = []
    secondSetImages: Image[] = []

    constructor() {
        for (let i = 0; i < 10; i++) {
            this.firstSetImages.push(
                new Image({
                    'path': faker.image.imageUrl(120, 120, undefined, true),
                    'description': faker.lorem.lines(2),
                    'likes': faker.datatype.number(80),
                    'width': 120,
                    'height': 120
                })
            )
        }

        for (let i = 10; i < 16; i++) {
            this.secondSetImages.push(
                new Image({
                    'path': faker.image.imageUrl(120, 120, undefined, true),
                    'description': faker.lorem.lines(2),
                    'likes': faker.datatype.number(80),
                    'width': 120,
                    'height': 120
                })
            )
        }
        console.log(this.secondSetImages)
    }

    ngOnInit(): void {
    }

}
