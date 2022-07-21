import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestScreenComponent } from './test-screen.component';

export default {
  title: 'Design System/Screens/Test screen',
  component: TestScreenComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TestScreenComponent>;

const Template: Story<TestScreenComponent> = (args: TestScreenComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
