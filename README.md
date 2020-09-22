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

## Example

``` jsx
export const Typeahead = (props: TypeaheadProps) => {
  const options = ['inscription', 'cacas', 'shelterers', 'dissimilitude', 'rustier', 'chervils', 'impossibly', 'ibuprofens', 'forechecker', 'misconceiving'];
  const {
    wrapperProps,
    inputProps,
    inputRef,
    menuProps,
    menuItems,
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