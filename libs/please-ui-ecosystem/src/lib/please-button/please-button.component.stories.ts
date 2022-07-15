import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PleaseButtonComponent } from './please-button.component';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'PleaseButtonComponent',
  component: PleaseButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
} as Meta<PleaseButtonComponent>;

const Template: Story<PleaseButtonComponent> = (
  args: PleaseButtonComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'primary',
  color: 'primary',
};

export const Warn = Template.bind({});
Warn.args = {
  text: 'test',
  color: 'warn',
};

export const Accent = Template.bind({});
Accent.args = {
  text: 'test',
  color: 'accent',
};

console.log('Primary.args  :>> ', Primary.args);

// export const wrap =
//   (templateFn: { (content: any): string; (arg0: any): any }) =>
//   (storyFn: () => any) => {
//     const story = storyFn();
//     return {
//       ...story,
//       template: templateFn(story.template),
//     };
//   };

// storiesOf('Button Component', module)
//   .addDecorator(
//     moduleMetadata({
//       imports: [MatButtonModule],
//       declarations: [PleaseButtonComponent],
//     })
//   )
//   .addDecorator(
//     wrap((content: any) => `<div class="ng-content-wrapper">${content}<div>`)
//   )
//   .add('with wrapper', () => ({
//     template: `<button [text]="text" [color]="color"></button>`,
//     props: {
//       text: 'with wrapper',
//       color: 'primary',
//     },
//   }));
