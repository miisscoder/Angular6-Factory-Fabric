import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { FormsModule }   from '@angular/forms';
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

// routing module
import { AppRoutingModule } from './app-routing.module';

import { SideMenuComponent } from './componants/side-menu/side-menu.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionsYNComponent } from './pages/questions/questions-yn/questions-yn.component';
import { QuestionsAddressComponent } from './pages/questions/questions-address/questions-address.component';
import { QuestionsRadioComponent } from './pages/questions/questions-radio/questions-radio.component';
import { QuestionsTextComponent } from './pages/questions/questions-text/questions-text.component';
import { QuestionsNumberCurrencyComponent }
from './pages/questions/questions-number-currency/questions-number-currency.component';
import { QuestionsNumberPercentageComponent }
from './pages/questions/questions-number-percentage/questions-number-percentage.component';
import { QuestionsCameraComponent }
from './pages/questions/questions-camera/questions-camera.component';
import { QuestionsMultitextComponent }
from './pages/questions/questions-multitext/questions-multitext.component';
import { QuestionsEligibilityComponent }
from './pages/questions/questions-eligibility/questions-eligibility.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SideMenuComponent,
        QuestionsYNComponent,
        QuestionsAddressComponent,
        QuestionsRadioComponent,
        QuestionsTextComponent,
        QuestionsNumberCurrencyComponent,
        QuestionsNumberPercentageComponent,
        QuestionsCameraComponent,
        QuestionsMultitextComponent,
        QuestionsEligibilityComponent
    ],
    imports: [
        GooglePlaceModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MalihuScrollbarModule.forRoot(),
        NgxSliderModule
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
