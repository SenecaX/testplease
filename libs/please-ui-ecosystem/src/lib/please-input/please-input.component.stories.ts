import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseInputComponent } from './please-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

export default {
  title: 'PleaseInputComponent',
  component: PleaseInputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        FormsModule,
      ],
      declarations: [PleaseInputComponent],
    }),
  ],
} as Meta<PleaseInputComponent>;

const Template: Story<PleaseInputComponent> = (args: PleaseInputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
