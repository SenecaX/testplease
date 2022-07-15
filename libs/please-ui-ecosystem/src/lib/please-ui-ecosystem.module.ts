import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloStorybookComponent } from './hello-storybook/hello-storybook.component';
import { MaterialModule } from '@testplease/material';
import { PleaseButtonComponent } from './please-button/please-button.component';
import { PleaseCardComponent } from './please-card/please-card.component';
import { PleaseDatePickerComponent } from './please-date-picker/please-date-picker.component';
import { PleaseInputComponent } from './please-input/please-input.component';
import { PleaseProgressBarComponent } from './please-progress-bar/please-progress-bar.component';
import { PleaseProgressSpinnerComponent } from './please-progress-spinner/please-progress-spinner.component';
import { PleaseSelectComponent } from './please-select/please-select.component';
import { PleaseSliderComponent } from './please-slider/please-slider.component';
import { PleaseSnackbarComponent } from './please-snackbar/please-snackbar.component';
import { PleaseTreeComponent } from './please-tree/please-tree.component';
import { PleaseSimpleTableComponent } from './please-simple-table/please-simple-table.component';
import { PleaseSidenavComponent } from './please-sidenav/please-sidenav.component';
import { PleaseTabsComponent } from './please-tabs/please-tabs.component';
import { PleaseExpansionPanelComponent } from './please-expansion-panel/please-expansion-panel.component';
@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    HelloStorybookComponent,
    PleaseButtonComponent,
    PleaseCardComponent,
    PleaseDatePickerComponent,
    PleaseInputComponent,
    PleaseProgressBarComponent,
    PleaseProgressSpinnerComponent,
    PleaseSelectComponent,
    PleaseSliderComponent,
    PleaseSnackbarComponent,
    PleaseTreeComponent,
    PleaseSimpleTableComponent,
    PleaseSidenavComponent,
    PleaseTabsComponent,
    PleaseExpansionPanelComponent,
  ],
  exports: [HelloStorybookComponent],
})
export class PleaseUiEcosystemModule {}
