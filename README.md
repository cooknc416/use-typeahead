# useTypeahead
### A headless, lightweight typeahead library built on React Hooks.

[![Codecov Coverage](https://img.shields.io/codecov/c/github/cooknc416/use-typeahead/develop.svg?style=flat-square)](https://codecov.io/gh/cooknc416/use-typeahead/) [![Pipeline Status](https://img.shields.io/github/workflow/status/cooknc416/use-typeahead/CI?style=flat-square)](https://github.com/cooknc416/use-typeahead/actions?query=workflow%3ACI)

## Features

- Single hook implementation
- Built with TypeScript
- ~1.5Kb minified, no dependencies
- Simple API, just provide a dataset and an optional configuration
- No styles provided, which means no overriding styles you don't like
- [WAI-ARIA](https://www.w3.org/TR/wai-aria/) compliant

## Installation

```
yarn add use-typeahead
```

## Usage

``` jsx
const Typeahead = () => {
  const options = ['inscription', 'cacas', 'shelterers', 'dissimilitude', 'rustier', 'chervils', 'impossibly', 'ibuprofens', 'forechecker', 'misconceiving'];
  const {
    wrapperProps,
    inputProps,
    inputRef,
    menuProps,
    menuItems
  } = useTypeahead(options);

  return (
    <div {...wrapperProps}>
      <input
        ref={inputRef}
        {...inputProps}
      />
      <div {...menuProps}>
        {menuItems.map((opt) => <div {...opt.props}>{opt.value}</div>)}
      </div>
    </div>
  );
};
```

## Configuration

### Props
Name | Type | Default | Description
-----|------|---------|------------
filterFn? | (item: any, searchTerm: string) => boolean |  | The callback to Array.prototype.filter()
maxWidth? | number | `0` | The max width of the dropdown menu
maxHeight? | number | `200` | The max height of the dropdown menu
offsetX? | number | `0` | The x-axis offset of the dropdown menu
offsetY? | number | `0` | The y-axis offset of the dropdown menu
menuAlign? | `'left'`, `'right'`, `'justify'` | `'justify'`  | The alignment of the dropdown menu to the input element
minimumCharCount? | number | `0` | How long the search term needs to be before the dropdown menu shows
**CSS Classes used for styling** |
wrapperClass? | string |   | The CSS class attribute attached to the HTML `<div>` wrapper element
inputClass? | string |   | The CSS class attribute attached to the HTML `<input>` element
menuClass? | string |   | The CSS class attribute attached to the HTML `<div>` dropdown menu element
menuItemClass? | string |   | The CSS class attribute attached to each HTML `<div>` menu item element


## License
This project is licensed under the terms of the [MIT license](/LICENSE).