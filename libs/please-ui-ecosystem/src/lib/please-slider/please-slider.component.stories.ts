import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseSliderComponent } from './please-slider.component';

export default {
  title: 'PleaseSliderComponent',
  component: PleaseSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PleaseSliderComponent>;

const Template: Story<PleaseSliderComponent> = (args: PleaseSliderComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}