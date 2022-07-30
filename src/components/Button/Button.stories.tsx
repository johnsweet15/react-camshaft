import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import extendTheme from '../Theme/Theme';

extendTheme({
  components: {
    Button: {
      // backgroundColor: 'blue',
    },
  },
});

const disable = {
  table: {
    disable: true,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Camshaft/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world!',
};

HelloWorld.argTypes = {
  onAnimationStart: disable,
  onDrag: disable,
  onDragStart: disable,
  onDragEnd: disable,
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!',
};
