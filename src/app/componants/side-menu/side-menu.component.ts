import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

    @Input() hide: boolean = true;
    @Output() onBack = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    w3_close() {
        this.hide = true;
        this.onBack.emit(null);
    }

}
