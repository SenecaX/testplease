import {
  moduleMetadata,
  Story,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { LoginComponent } from './login.component';

import { PleaseInputComponent } from '../../atoms/please-input/please-input.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PleaseButtonComponent } from '../../atoms/please-button/please-button.component';

export default {
  title: 'Design System/patterns/Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      declarations: [PleaseInputComponent, PleaseButtonComponent],
      imports: [CommonModule, BrowserAnimationsModule, MaterialModule],
    }),
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
} as Meta<LoginComponent>;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  props: {
    ...args,
    submitText: 'Cancel',
    submitColor: 'primary',
    cancelText: 'Submit',
    cancelColor: 'warn',
  },
});

export const Primary = Template.bind({});
Primary.args = {};

export const OneItem = Template.bind({});
OneItem.args = {};
