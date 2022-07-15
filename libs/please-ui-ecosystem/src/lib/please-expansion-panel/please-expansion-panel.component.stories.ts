import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseExpansionPanelComponent } from './please-expansion-panel.component';
import {MatExpansionModule} from '@angular/material/expansion';

export default {
  title: 'PleaseExpansionPanelComponent',
  component: PleaseExpansionPanelComponent,
  decorators: [
    moduleMetadata({
      imports: [MatExpansionModule],
    })
  ],
} as Meta<PleaseExpansionPanelComponent>;

const Template: Story<PleaseExpansionPanelComponent> = (args: PleaseExpansionPanelComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
