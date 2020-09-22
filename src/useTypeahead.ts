import React from 'react';
import { useGetLatest } from './utilities';

// ================= Types =====================

export type MenuAlign = 'left' | 'right' | 'justify' | undefined;

export interface TypeaheadConfig {
  filterFn?: (item: any, term: string) => boolean;
  maxWidth?: number;
  maxHeight?: number;
  offsetX?: number;
  offsetY?: number;
  menuAlign?: MenuAlign;
  minimumCharCount?: number;
  wrapperClass?: string;
  inputClass?: string;
  menuClass?: string;
  menuItemClass?: string;
}

export interface WrapperProps {
  style: React.CSSProperties;
}

export interface InputProps {
  style: React.CSSProperties;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MenuProps {
  style: React.CSSProperties;
  role: 'listbox';
}

export interface MenuItem {
  props: {
    key: string;
    role: 'option';
    'aria-label': string;
  };
  value: any;
}

export interface TypeaheadInstance {
  wrapperProps: WrapperProps;
  inputProps: InputProps;
  menuProps: MenuProps;
  menuItems: MenuItem[];
  allMenuItems: MenuItem[];
  inputRef: React.RefObject<HTMLInputElement>;
}

const getMenuWidth = (align: MenuAlign, dimensions: DOMRect): number | string => {
  if (align === 'left' || align === 'right') return 'auto';
  return dimensions.width;
};

const getMenuStyle = (config: TypeaheadConfig, dimensions: DOMRect, searchTerm: string): React.CSSProperties => {
  const {
    maxHeight,
    maxWidth,
    offsetX,
    offsetY,
    menuAlign,
    minimumCharCount = 0
  } = config;
  const { height } = dimensions;

  return {
    display: searchTerm.length > minimumCharCount ? 'block' : 'none',
    position: 'absolute',
    left: menuAlign === 'left' ? (offsetX ?? 0) : 'unset',
    right: menuAlign === 'right' ? (offsetX ?? 0) : 'unset',
    top: height + (offsetY ?? 0),
    height: maxHeight,
    width: getMenuWidth(menuAlign, dimensions),
    maxWidth: maxWidth || 'auto',
    overflowY: 'auto'
  };
};

const defaultFilterFn = (item: MenuItem, term: string) => item.value.includes(term);

// ================= Defaults =================

const defaultConfig: Required<TypeaheadConfig> = {
  filterFn: defaultFilterFn,
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

// ================= Hook =====================

export const useTypeahead = (options: any[], config?: TypeaheadConfig): TypeaheadInstance => {
  const [inputEl, ref] = React.useState<HTMLInputElement>();
  const typeaheadRef = React.useRef({});
  const [searchTerm, setSearchTerm] = React.useState('');

  const typeaheadConfig: Required<TypeaheadConfig> = {
    ...defaultConfig,
    ...config
  };

  const getTypeahead = useGetLatest(typeaheadRef.current);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  getTypeahead().wrapperProps = {
    className: typeaheadConfig.wrapperClass ?? undefined,
    style: {
      display: 'inline',
      position: 'relative'
    }
  };

  getTypeahead().inputProps = {
    value: searchTerm,
    onChange: handleChange,
    className: typeaheadConfig.inputClass ?? undefined
  };

  if (inputEl) {
    const inputDimensions = inputEl.getBoundingClientRect();

    getTypeahead().menuProps = {
      style: getMenuStyle(typeaheadConfig, inputDimensions, searchTerm),
      role: 'listbox',
      'aria-label': 'menu-options',
      className: typeaheadConfig.menuClass ?? undefined
    };
  }

  getTypeahead().inputRef = ref;

  getTypeahead().allMenuItems = React.useMemo(() => options.map((opt) => ({
    props: {
      key: opt.toString().trim(),
      role: 'option',
      'aria-label': opt.toString().trim(),
      className: typeaheadConfig.menuItemClass ?? undefined
    },
    value: opt
  })), [options]);

  const {
    filterFn,
    minimumCharCount 
  } = typeaheadConfig;

  getTypeahead().menuItems = React.useMemo(() => {
    if (searchTerm.length <= (minimumCharCount ?? 0)) {
      return getTypeahead().allMenuItems;
    }
    return getTypeahead().allMenuItems.filter((item: MenuItem) => filterFn(item, searchTerm));
  }, [searchTerm, config, options]);

  return getTypeahead();
};
