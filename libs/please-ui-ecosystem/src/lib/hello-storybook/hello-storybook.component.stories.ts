import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HelloStorybookComponent } from './hello-storybook.component';

export default {
  title: 'HelloStorybookComponent',
  component: HelloStorybookComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HelloStorybookComponent>;

const Template: Story<HelloStorybookComponent> = (args: HelloStorybookComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}