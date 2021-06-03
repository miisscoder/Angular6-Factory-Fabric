import { Component, OnInit } from '@angular/core'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Options } from 'ng5-slider';

@Component({
    selector: 'app-questions-number-percentage',
    templateUrl: './questions-number-percentage.component.html',
    styleUrls: ['./questions-number-percentage.component.css']
})
export class QuestionsNumberPercentageComponent implements OnInit {

    hide: boolean = true;

    value: number = 0;
    options: Options = {
        floor: 0,
        ceil: 100,
        showSelectionBar: true
    };

    commaValue :string ="";
    inputValue: string ="";

    constructor(public cookieService: CookieService) { }

    ngOnInit() {
    }

    w3_open() {
        this.hide = false;
    }

    onBack() {
        this.hide = true;
     }
    

    numberComma() {
        var num = this.inputValue.replace(/,/gi, "");
        this.commaValue = num.split(/(?=(?:\d{3})+$)/).join(",");
        this.inputValue = this.commaValue;
        this.value = num === "" ? 0 : parseInt(num, 10);
        
    }

    valueChangeSlider() {
        this.commaValue = this.value.toString()
            .split(/(?=(?:\d{3})+$)/).join(",");
        this.inputValue = this.commaValue;

    }
    
}
