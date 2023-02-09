import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EligibilityRequireComponent } from './pages/eligibility-require/eligibility-require.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShareSavingsComponent } from './pages/share-savings/share-savings.component';
import { VacationClubComponent } from './pages/vacation-club/vacation-club.component';
import { ChristmasClubComponent } from './pages/christmas-club/christmas-club.component';
import { PayrollDeductionComponent } from './pages/payroll-deduction/payroll-deduction.component';
import { ShareDraftCheckingComponent } from './pages/share-draft-checking/share-draft-checking.component';
import { DebitCardsComponent } from './pages/debit-cards/debit-cards.component';
import { NightDropComponent } from './pages/night-drop/night-drop.component';
import { CreditUnionChecksComponent } from './pages/credit-union-checks/credit-union-checks.component';
import { SharedSecuredLoansComponent } from './pages/shared-secured-loans/shared-secured-loans.component';
import { PersonalLoansComponent } from './pages/personal-loans/personal-loans.component';
import { VisaCreditCardsComponent } from './pages/visa-credit-cards/visa-credit-cards.component';
import { CreditUnionPropertyComponent } from './pages/credit-union-property/credit-union-property.component';
import { OtherServicesComponent } from './pages/other-services/other-services.component';
import { ShareRatesComponent } from './pages/share-rates/share-rates.component';
import { LoanRatesComponent } from './pages/loan-rates/loan-rates.component';
import { CalloutsComponent } from './callouts/callouts.component';
import { ShareCertificatesComponent } from './pages/share-certificates/share-certificates.component';
import { SecuredLendingComponent } from './pages/secured-lending/secured-lending.component';
import { HelpfulLinksComponent } from './pages/helpful-links/helpful-links.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EligibilityRequireComponent,
    HeaderComponent,
    FooterComponent,
    ShareSavingsComponent,
    VacationClubComponent,
    ChristmasClubComponent,
    PayrollDeductionComponent,
    ShareDraftCheckingComponent,
    DebitCardsComponent,
    NightDropComponent,
    CreditUnionChecksComponent,
    SharedSecuredLoansComponent,
    PersonalLoansComponent,
    VisaCreditCardsComponent,
    CreditUnionPropertyComponent,
    OtherServicesComponent,
    ShareRatesComponent,
    LoanRatesComponent,
    CalloutsComponent,
    ShareCertificatesComponent,
    SecuredLendingComponent,
    HelpfulLinksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
