import React, { useEffect } from 'react';

function ChildComponent({ text }) {
  useEffect(() => {
    console.log('Text prop has changed:', text);
  }, [text]);

  return <p>Text from parent: {text}</p>;
}

export default ChildComponent;
