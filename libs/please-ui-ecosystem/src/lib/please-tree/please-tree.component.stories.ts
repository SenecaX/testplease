import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseTreeComponent } from './please-tree.component';

export default {
  title: 'PleaseTreeComponent',
  component: PleaseTreeComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PleaseTreeComponent>;

const Template: Story<PleaseTreeComponent> = (args: PleaseTreeComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}