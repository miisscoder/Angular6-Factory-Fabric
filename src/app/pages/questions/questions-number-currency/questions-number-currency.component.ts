import { Component, OnInit } from '@angular/core'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-questions-number-currency',
  templateUrl: './questions-number-currency.component.html',
  styleUrls: ['./questions-number-currency.component.css']
})
export class QuestionsNumberCurrencyComponent implements OnInit {

  hide: boolean = true;

  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 250
  };

  commaValue: string = "";
  inputValue: string = "";

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
