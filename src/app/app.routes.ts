import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EligibilityRequireComponent } from './pages/eligibility-require/eligibility-require.component';
import { ShareSavingsComponent } from './pages/share-savings/share-savings.component';
import { VacationClubComponent } from './pages/vacation-club/vacation-club.component';
import { ChristmasClubComponent } from './pages/christmas-club/christmas-club.component';
import { ShareDraftCheckingComponent } from './pages/share-draft-checking/share-draft-checking.component';
import { PayrollDeductionComponent } from './pages/payroll-deduction/payroll-deduction.component';
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
import { ShareCertificatesComponent } from './pages/share-certificates/share-certificates.component';
import { SecuredLendingComponent } from './pages/secured-lending/secured-lending.component';
import { HelpfulLinksComponent } from './pages/helpful-links/helpful-links.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'eligibilityRequire', component: EligibilityRequireComponent},
  { path: 'shareSavings', component: ShareSavingsComponent},
  { path: 'vacationClub', component: VacationClubComponent},
  { path: 'christmasClub', component: ChristmasClubComponent},
  { path: 'shareCertificates', component: ShareCertificatesComponent},
  { path: 'shareRates', component: ShareRatesComponent},
  { path: 'loanRates', component: LoanRatesComponent},
  { path: 'payrollDeduction', component: PayrollDeductionComponent},
  { path: 'shareDraftChecking', component: ShareDraftCheckingComponent},
  { path: 'debitCards', component: DebitCardsComponent},
  { path: 'nightDrop', component: NightDropComponent},
  { path: 'creditUnionChecks', component: CreditUnionChecksComponent},
  { path: 'sharedSecuredLoans', component: SharedSecuredLoansComponent},
  { path: 'securedLending', component: SecuredLendingComponent},
  { path: 'personalLoans', component: PersonalLoansComponent},
  { path: 'visaCreditCards', component: VisaCreditCardsComponent},
  { path: 'creditUnionProperty', component: CreditUnionPropertyComponent},
  { path: 'helpfulLinks', component: HelpfulLinksComponent},
  { path: 'otherServices', component: OtherServicesComponent}
];
