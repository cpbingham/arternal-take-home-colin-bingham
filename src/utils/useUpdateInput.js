import { useState } from 'react';

const useUpdateInput = (handleEnter, item) => {
  const [state, setState] = useState(item);

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      handleEnter(state);
      setState('');
    }
  };

  return [state, setState, handleKeyDown];
};

export default useUpdateInput;
