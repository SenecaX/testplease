import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloStorybookComponent } from './hello-storybook/hello-storybook.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloStorybookComponent],
  exports: [HelloStorybookComponent],
})
export class PleaseUiEcosystemModule {}
