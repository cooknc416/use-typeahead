import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {
  Story,
  Meta 
} from '@storybook/react/types-6-0';
import { Typeahead } from './Typeahead';
import { TypeaheadConfig } from '../src/useTypeahead';

const defaultArgs: TypeaheadConfig = {
  maxWidth: 0,
  maxHeight: 200,
  offsetX: 0,
  offsetY: 0,
  menuAlign: 'justify',
  minimumCharCount: 0,
  wrapperClass: '',
  inputClass: '',
  menuClass: '',
  menuItemClass: ''
};

export default {
  title: 'Examples/UseTypeahead',
  component: Typeahead,
  args: defaultArgs,
  argTypes: {
    menuAlign: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right', 'justify']
      }
    }
  }
} as Meta;

const Template: Story = (args) => (
  <Typeahead
    label='Label'
    {...args}
  />
);

export const NoStyles = Template.bind({});
NoStyles.args = {
  label: 'No Styles'
};

export const MaxHeight = Template.bind({});
MaxHeight.args = {
  label: 'Max Height',
  maxHeight: 100
};
