import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule } from '@testplease/material';
import { PleaseButtonComponent } from './atoms/please-button/please-button.component';
import { MatButtonModule } from '@angular/material/button';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './material/material.module';
import { PleaseProgressBarComponent } from './atoms/please-progress-bar/please-progress-bar.component';
import { PleaseInputComponent } from './atoms/please-input/please-input.component';
import { LoginComponent } from './patterns/login/login.component';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { PleaseTaskComponent } from './atoms/please-task/please-task.component';
import { PleaseTaskListComponent } from './patterns/task-list/task-list.component';
import { TestScreenComponent } from './screens/test-screen/test-screen.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PleaseButtonComponent,
    // PleaseDatePickerComponent,
    // PleaseInputComponent,
    PleaseProgressBarComponent,
    PleaseInputComponent,
    LoginComponent,
    PleaseTaskComponent,
    PleaseTaskListComponent,
    TestScreenComponent,
    // PleaseProgressSpinnerComponent,
    // PleaseSelectComponent,
    // PleaseSliderComponent,
    // PleaseSnackbarComponent,
    // PleaseTreeComponent,
    // PleaseSimpleTableComponent,
    // PleaseSidenavComponent,
    // PleaseTabsComponent,
    // PleaseExpansionPanelComponent,
  ],
  exports: [
    PleaseButtonComponent,
    PleaseProgressBarComponent,
    PleaseInputComponent,
    LoginComponent,
  ],
  providers: [],
})
export class PleaseUiEcosystemModule {}
