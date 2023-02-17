import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
// import 'react-tagsinput/react-tagsinput.css';

const TagSection = () => {
  const [tags, setTags] = useState([]);

  const handleChange = (tags) => {
    setTags(tags);
  }

  return (
    <TagsInput value={tags} onChange={handleChange}/>
  );
}

export default TagSection;
