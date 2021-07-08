import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { OutcomeComponent } from './outcome/outcome.component';
import { IncomeComponent } from './income/income.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { AssetsComponent } from './assets/assets.component';
import { LiabilitiesComponent } from './liabilities/liabilities.component';
import { CapitalComponent } from './capital/capital.component';



@NgModule({
  declarations: [
    AppComponent,
    OutcomeComponent,
    IncomeComponent,
    TreeNodeComponent,
    AssetsComponent,
    LiabilitiesComponent,
    CapitalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
