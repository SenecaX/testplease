import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseSidenavComponent } from './please-sidenav.component';

export default {
  title: 'PleaseSidenavComponent',
  component: PleaseSidenavComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PleaseSidenavComponent>;

const Template: Story<PleaseSidenavComponent> = (args: PleaseSidenavComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}