import React, { useState } from 'react';

const ChatSelect = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log(`Selected ${event.target.value}`);
    setValue(event.target.value);
  };

  return (
    <div className="submit-as">
      <select value={value} onChange={handleChange}>
        <option value="">Submit as</option>
        <option value="jack">Open</option>
        <option value="lucy">Pending</option>
        <option value="tom">Closed</option>
      </select>
    </div>
  );
};

export default ChatSelect;

