import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseSelectComponent } from './please-select.component';
import { MatSelectModule } from '@angular/material/select';

export default {
  title: 'PleaseSelectComponent',
  component: PleaseSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSelectModule],
    }),
  ],
} as Meta<PleaseSelectComponent>;

const Template: Story<PleaseSelectComponent> = (
  args: PleaseSelectComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
