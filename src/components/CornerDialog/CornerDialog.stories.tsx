import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CornerDialog from './CornerDialog';
import extendTheme from '../Theme/Theme';

extendTheme({
  components: {
    CornerDialog: {},
  },
});

const disable = {
  table: {
    disable: true,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Camshaft/CornerDialog',
  component: CornerDialog,
} as ComponentMeta<typeof CornerDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CornerDialog> = (args) => <CornerDialog {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  title: 'Welcome',
  description: 'This is a corner dialog',
};

HelloWorld.argTypes = {
  onAnimationStart: disable,
  onDrag: disable,
  onDragStart: disable,
  onDragEnd: disable,
};
