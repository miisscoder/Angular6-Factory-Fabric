import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'questions/yn', component: QuestionsYNComponent },
    { path: 'questions/address', component: QuestionsAddressComponent },
    { path: 'questions/radio', component: QuestionsRadioComponent },
    { path: 'questions/text', component: QuestionsTextComponent },
    { path: 'questions/number/currency', component: QuestionsNumberCurrencyComponent },
    { path: 'questions/number/percentage', component: QuestionsNumberPercentageComponent },
    { path: 'questions/camera', component: QuestionsCameraComponent },
    { path: 'questions/multitext', component: QuestionsMultitextComponent },
    { path: 'questions/eligibility', component: QuestionsEligibilityComponent },
    { path: '**', redirectTo: 'home' },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
