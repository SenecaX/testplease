import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseDatePickerComponent } from './please-date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

export default {
  title: 'PleaseDatePickerComponent',
  component: PleaseDatePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCommonModule,
      ],
    }),
  ],
} as Meta<PleaseDatePickerComponent>;

const Template: Story<PleaseDatePickerComponent> = (
  args: PleaseDatePickerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
