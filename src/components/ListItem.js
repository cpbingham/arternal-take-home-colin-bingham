import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useUpdateInput from '../utils/useUpdateInput';
import './ListItem.scss';

function ListItem({ item, handleRemoveListItem, handleUpdateListItem }) {
  const [inputItem, setInputItem, handleKeyDown] = useUpdateInput(handleUpdateListItem, item);
  const [checked, setChecked] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    setTimeout(() => handleRemoveListItem(item.id), 1000);
  };

  return (
    <li className="list-item">
      <div className="item-container">
        <input
          type="checkbox"
          onChange={handleChecked}
          checked={checked}
        />
        {!editing ? (
          <button
            className="text-btn"
            type="button"
            onClick={() => setEditing(true)}
          >
            {item.description}
          </button>
        ) : (
          <input
            type="text"
            value={inputItem.description}
            onChange={(e) => {
              setInputItem({
                ...inputItem,
                description: e.target.value,
              });
            }}
            onKeyDown={(e) => {
              handleKeyDown(e);
              if (e.code === 'Enter') { setEditing(false); }
            }}
          />
        )}
      </div>
      <p className="date-txt">{item.date.toString().slice(0, 24)}</p>
    </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  handleRemoveListItem: PropTypes.func.isRequired,
  handleUpdateListItem: PropTypes.func.isRequired,
};

export default ListItem;
