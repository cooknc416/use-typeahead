import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeaheadExample } from '../stories/Typeahead';
import { testOptionsSmall } from '../test-utils/testOptions';

describe('useTypeahead', () => {
  it('renders a basic input and typeahead', () => {
    expect.assertions(1);
    const { getByRole } = render(<TypeaheadExample options={testOptionsSmall} />);
  
    const input = getByRole('textbox');
  
    expect(input).toBeInTheDocument();
  });
  
  it('applys basic styles', async () => {
    expect.assertions(1);
    const { getByRole } = render(<TypeaheadExample options={testOptionsSmall} />);
  
    const input = getByRole('textbox');
    await userEvent.type(input, 'a');
    const menu = getByRole('listbox');
  
    expect(menu).toHaveStyle('display: block;');
  });
  
  it('displays the menu when the user types', async () => {
    expect.assertions(3);
    const {
      getByRole,
      getAllByRole 
    } = render(<TypeaheadExample options={testOptionsSmall} />);
  
    // Random lowercase letter
    const randomChar = String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97));
  
    const input = getByRole('textbox');
    await userEvent.type(input, randomChar);
    const menu = getByRole('listbox');
    const options = getAllByRole('option');
  
    expect(input).toHaveValue(randomChar);
    expect(menu).toBeInTheDocument();
    expect(options).toHaveLength(testOptionsSmall.filter((opt) => opt.includes(randomChar)).length);
  });
  
  it('uses a custom filter function', async () => {
    expect.assertions(3);
    const {
      getByRole,
      getAllByRole 
    } = render(<TypeaheadExample
      options={testOptionsSmall}
      filterFn={(item: any, term: string) => !item.value.includes(term)}
    />);
  
    // Random lowercase letter
    const randomChar = String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97));
  
    const input = getByRole('textbox');
    await userEvent.type(input, randomChar);
    const menu = getByRole('listbox');
    const options = getAllByRole('option');
  
    expect(input).toHaveValue(randomChar);
    expect(menu).toBeInTheDocument();
    expect(options).toHaveLength(testOptionsSmall.filter((opt) => !opt.includes(randomChar)).length);
  });
});
