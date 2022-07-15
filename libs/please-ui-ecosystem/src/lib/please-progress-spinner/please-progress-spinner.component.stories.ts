import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseProgressSpinnerComponent } from './please-progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export default {
  title: 'PleaseProgressSpinnerComponent',
  component: PleaseProgressSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
      declarations: [PleaseProgressSpinnerComponent],
    }),
  ],
} as Meta<PleaseProgressSpinnerComponent>;

const Template: Story<PleaseProgressSpinnerComponent> = (
  args: PleaseProgressSpinnerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
