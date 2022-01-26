import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ListItem from './ListItem';
import ListItemInput from './ListItemInput';

function ToDoList() {
  const [listData, setListData] = useState([]);

  const handleAddListItem = (description) => {
    setListData([...listData, {
      id: uuidv4(),
      description,
      date: new Date(),
    }]);
  };

  const handleRemoveListItem = (id) => {
    setListData(listData.filter((item) => item.id !== id));
  };

  const handleUpdateListItem = (item) => {
    if (item.description !== '') {
      const result = listData.map((listItem) => {
        if (listItem.id !== item.id) return listItem;
        return {
          ...listItem,
          description: item.description,
          date: new Date(),
        };
      });
      setListData(result);
    } else {
      handleRemoveListItem(item.id);
    }
  };

  return (
    <ol>
      {listData.map((listItem) => (
        <ListItem
          item={listItem}
          key={listItem.id}
          handleRemoveListItem={handleRemoveListItem}
          handleUpdateListItem={handleUpdateListItem}
        />
      ))}
      <ListItemInput
        handleAddListItem={handleAddListItem}
      />
    </ol>
  );
}

export default ToDoList;
