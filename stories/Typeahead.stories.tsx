import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {
  Story,
  Meta 
} from '@storybook/react/types-6-0';
import {
  TypeaheadExample,
  TypeaheadExampleProps 
} from './Typeahead';
import { TypeaheadConfig } from '../src/useTypeahead';

const defaultArgs: TypeaheadConfig = {
  maxWidth: 0,
  maxHeight: 200,
  offsetX: 0,
  offsetY: 0,
  menuAlign: 'justify',
  minimumCharCount: 0
};

export default {
  title: 'Examples/UseTypeahead',
  component: TypeaheadExample,
  args: defaultArgs,
  argTypes: {
    maxHeight: {
      name: 'Max Height',
      control: {
        type: 'number',
        defaultValue: 200
      }
    },
    maxWidth: {
      name: 'Max Width',
      control: {
        type: 'number',
        defaultValue: 0
      }
    },
    offsetX: {
      name: 'X-Axis Offset',
      control: {
        type: 'number',
        defaultValue: 0
      }
    },
    offsetY: {
      name: 'Y-Axis Offset',
      control: {
        type: 'number',
        defaultValue: 0
      }
    },
    menuAlign: {
      name: 'Menu Alignment',
      defaultValue: 'justify',
      control: {
        type: 'inline-radio',
        options: ['left', 'right', 'justify']
      }
    },
    minimumCharCount: {
      name: 'Minimum Character Count',
      control: {
        type: 'number',
        defaultValue: 0
      }
    },
    filterFn: {
      control: {
        disable: true
      }
    },
    options: {
      control: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story = (args: TypeaheadExampleProps) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <TypeaheadExample {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {};
