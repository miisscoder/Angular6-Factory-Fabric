import { Component, OnInit } from '@angular/core'
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
    selector: 'app-questions-yn',
    templateUrl: './questions-yn.component.html',
    styleUrls: ['./questions-yn.component.css']
})
export class QuestionsYNComponent implements OnInit {

    hide: boolean = true;
    yes: string = "false";
    no: string = "false";

    scrollbarOptions = {
        axis: 'y',
        theme: 'minimal-dark',
        alwaysShowScrollbar: 0
    };

    constructor(public cookieService: CookieService) { }

    ngOnInit() {
        this.yes =  this.cookieService.get("yes");
        this.no = this.cookieService.get("no");
    }

    w3_open() {
        this.hide = false;
    }

    onBack() {
        this.hide = true;
    }

    onYes() {
        this.yes = "true";
        this.no = "false";
        this.cookieService.put("yes", "true");
        this.cookieService.put("no", "false");
    }

    onNo() {
        this.yes = "false";
        this.no = "true";
        this.cookieService.put("yes", "false");
        this.cookieService.put("no", "true");
    }
}
