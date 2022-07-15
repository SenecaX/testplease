import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseSnackbarComponent } from './please-snackbar.component';

export default {
  title: 'PleaseSnackbarComponent',
  component: PleaseSnackbarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PleaseSnackbarComponent>;

const Template: Story<PleaseSnackbarComponent> = (args: PleaseSnackbarComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}