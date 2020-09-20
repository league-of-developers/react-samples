import React, { useState } from 'react';
import Button from '../components/Button';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        {' '}
        {count}
        {' '}
      </p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        label="+"
      />
      <Button
        onClick={() => {
          setCount(count - 1);
        }}
        label="-"
        color="danger"
      />
    </div>
  );
};

export default Counter;
