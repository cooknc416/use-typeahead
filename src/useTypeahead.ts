import React from 'react';
import { useGetLatest } from './utilities';

// ================= Types =====================

export interface TypeaheadConfig {
  customFilterFn?: (item: string) => boolean;
  maxHeight?: number;
  offsetX?: number;
  offsetY?: number;
}

export interface InputProps {
  style: React.CSSProperties;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MenuProps {
  style: React.CSSProperties;
}

export interface Typeahead {
  inputProps: InputProps;
  menuProps: MenuProps;
  menuItems: string[];
  inputRef: React.RefObject<HTMLInputElement>;
}

// ================= Defaults =================

const defaultConfig: TypeaheadConfig = {
  maxHeight: 200,
  offsetX: 0,
  offsetY: 0
};

// ================= Hook =====================

export const useTypeahead = (options: any[], config?: TypeaheadConfig): Typeahead => {
  const typeaheadConfig: TypeaheadConfig = {
    ...defaultConfig,
    ...config
  };

  const {
    customFilterFn,
    maxHeight,
    offsetX = 0,
    offsetY = 0
  } = typeaheadConfig;

  const [element, ref] = React.useState<HTMLInputElement>();

  const typeaheadRef = React.useRef({});
  const [searchTerm, setSearchTerm] = React.useState('');

  const getTypeahead = useGetLatest(typeaheadRef.current);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  getTypeahead().inputProps = {
    value: searchTerm,
    onChange: handleChange
  };

  if (element) {
    const dimensions = element.getBoundingClientRect();

    const {
      height,
      left,
      top 
    } = dimensions;

    getTypeahead().menuProps = {
      style: {
        display: searchTerm.length > 0 ? 'block' : 'none',
        position: 'absolute',
        left: left + offsetX,
        top: top + height + offsetY,
        height: maxHeight,
        overflowY: 'auto'
      }
    };
  }

  getTypeahead().inputRef = ref;

  getTypeahead().menuItems = React.useMemo(() => {
    if (customFilterFn) {
      options.filter(customFilterFn);
    }

    return options.filter((opt) => opt.includes(searchTerm));
  }, [searchTerm, config]);

  return getTypeahead();
};
