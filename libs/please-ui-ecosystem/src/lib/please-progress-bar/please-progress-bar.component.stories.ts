import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseProgressBarComponent } from './please-progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export default {
  title: 'PleaseProgressBarComponent',
  component: PleaseProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressBarModule],
      declarations: [PleaseProgressBarComponent],
    }),
  ],
} as Meta<PleaseProgressBarComponent>;

const Template: Story<PleaseProgressBarComponent> = (
  args: PleaseProgressBarComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
