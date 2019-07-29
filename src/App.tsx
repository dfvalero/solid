import React from 'react';

type AppProps = {
  total: number
}

const app = ({total} : AppProps) => {
  return (
      <div>Total: {total}</div>
  );
};

export default app;
