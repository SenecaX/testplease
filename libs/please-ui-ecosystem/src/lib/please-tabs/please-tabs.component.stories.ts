import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseTabsComponent } from './please-tabs.component';

export default {
  title: 'PleaseTabsComponent',
  component: PleaseTabsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PleaseTabsComponent>;

const Template: Story<PleaseTabsComponent> = (args: PleaseTabsComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}