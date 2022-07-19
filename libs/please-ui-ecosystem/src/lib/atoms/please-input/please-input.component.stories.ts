import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material/material.module';
import { PleaseInputComponent } from './please-input.component';

export default {
  title: 'Design System/Atoms/Input',
  component: PleaseInputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        CommonModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta<PleaseInputComponent>;

const Template: Story<PleaseInputComponent> = (args: PleaseInputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
