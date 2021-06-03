import { Component, OnInit } from '@angular/core'
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
    selector: 'app-questions-eligibility',
    templateUrl: './questions-eligibility.component.html',
    styleUrls: ['./questions-eligibility.component.css']
})
export class QuestionsEligibilityComponent implements OnInit {

    hide: boolean = true;
    radio ="1";
    radioRefresh = true;


    scrollbarOptions = {
        axis: 'y',
        theme: 'minimal-dark',
        alwaysShowScrollbar: 0
    };

    constructor(public cookieService: CookieService) { }

    ngOnInit() {
        this.radio = this.cookieService.get("radio");
    }

    w3_open() {
        this.hide = false;
    }

    onBack() {
        this.hide = true;
    }

    onRadio(chosen) {
        this.radio = chosen;
        this.cookieService.put("radio", chosen);
    }
    
}
