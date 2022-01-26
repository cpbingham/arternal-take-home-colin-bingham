import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useUpdateInput from '../utils/useUpdateInput';

function ListItemInput({ handleAddListItem }) {
  const [textInput, setTextInput, handleKeyDown] = useUpdateInput(handleAddListItem);
  const inputRef = useRef(null);

  return (
    <li className="list-item">
      <div className="item-container">
        <button
          onClick={() => inputRef.current.focus()}
          type="button"
        >
          +
        </button>
        <input
          ref={inputRef}
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </li>
  );
}

ListItemInput.propTypes = {
  handleAddListItem: PropTypes.func.isRequired,
};

export default ListItemInput;
