import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseCardComponent } from './please-card.component';
import {MatCardModule} from '@angular/material/card';

export default {
  title: 'PleaseCardComponent',
  component: PleaseCardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatCardModule
      ],
    })
  ],
} as Meta<PleaseCardComponent>;

const Template: Story<PleaseCardComponent> = (args: PleaseCardComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}

