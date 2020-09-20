import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import MySwal from '../components/FancyAlert';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      MySwal.fire('Good job!', 'You clicked ten times!', 'success');
    }
  }, [count]);

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

// MySwal.fire('Good job!', 'You clicked the button!', 'success')
