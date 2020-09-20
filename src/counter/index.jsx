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
        isDisabled={count === 0}
        onClick={() => {
          setCount(count - 1);
        }}
        label="-"
        color="danger"
      />
      {count === 0 && <p>Valor tem que ser maior que zero.</p>}
    </div>
  );
};

export default Counter;
