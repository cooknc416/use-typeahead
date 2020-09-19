import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {
  Story,
  Meta 
} from '@storybook/react/types-6-0';

import { Typeahead } from './Typeahead';

export default {
  title: 'Example/Default',
  component: Typeahead
} as Meta;

const Template: Story = (args) => <Typeahead {...args} />;

export const CustomText = Template.bind({});
