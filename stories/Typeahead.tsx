import React from 'react';
import {
  useTypeahead,
  TypeaheadConfig 
} from '../src/useTypeahead';
import { testOptionsLarge } from '../test-utils/testOptions';

export interface TypeaheadExampleProps extends TypeaheadConfig {
  options: any[];
}

export const TypeaheadExample = (props: TypeaheadExampleProps) => {
  const {
    options = testOptionsLarge,
    ...config 
  } = props;

  const {
    wrapperProps,
    inputProps,
    inputRef,
    menuProps,
    menuItems
  } = useTypeahead(options, {
    ...config 
  });

  return (
    <div {...wrapperProps}>
      <input
        ref={inputRef}
        id='testId'
        {...inputProps}
      />
      <div {...menuProps}>
        {menuItems.map((opt) => <div {...opt.props}>{opt.value}</div>)}
      </div>
    </div>
  );
};
