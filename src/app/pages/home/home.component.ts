import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    scrollbarOptions = {
        axis: 'y',
        theme: 'minimal-dark',
        alwaysShowScrollbar: 0
    };
}
