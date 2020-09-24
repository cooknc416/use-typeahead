import React from 'react';
import { useTypeahead, TypeaheadConfig } from '../src/useTypeahead';
import { testOptionsLarge } from '../test-utils/testOptions';

interface TypeaheadProps extends TypeaheadConfig {
  options?: any[];
  label?: string;
}

export const Typeahead = (props: TypeaheadProps) => {
  const { options = testOptionsLarge, label, ...config } = props;
  const {
    wrapperProps,
    inputProps,
    inputRef,
    menuProps,
    menuItems,
  } = useTypeahead(options, { ...config });
  return (
    <>
    <div>
    <label htmlFor='testId'>{label}</label>
    </div>
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
    </>
  );
};
