import { Component, OnInit, ViewChild } from '@angular/core'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { GooglePlaceDirective } from "ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive";
import { Address } from "ngx-google-places-autocomplete/objects/address";

@Component({
    selector: 'app-questions-address',
    templateUrl: './questions-address.component.html',
    styleUrls: ['./questions-address.component.css']
})
export class QuestionsAddressComponent implements OnInit {

    hide: boolean = true;
    yes: string = "false";
    no: string = "false";

    scrollbarOptions = {
        axis: 'y',
        theme: 'minimal-dark',
        alwaysShowScrollbar: 0
    };

    @ViewChild("placesRef") placesRef: GooglePlaceDirective;

    public handleAddressChange(address: Address) {
        // Do some stuff
    }


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
