import React from 'react';

export const useGetLatest = (obj: any): any => {
  const ref = React.useRef();
  ref.current = obj;

  return React.useCallback(() => ref.current, []);
};
