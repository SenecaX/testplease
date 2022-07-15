import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseSimpleTableComponent } from './please-simple-table.component';

export default {
  title: 'PleaseSimpleTableComponent',
  component: PleaseSimpleTableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PleaseSimpleTableComponent>;

const Template: Story<PleaseSimpleTableComponent> = (args: PleaseSimpleTableComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}