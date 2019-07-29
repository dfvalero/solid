import React from 'react';

type Total = {
  totalArea: string,
  totalPerimeter: string
}

type AppProps = {
  total: Total
}

const app = ({total} : AppProps) => {
  const { totalArea, totalPerimeter } = total;

  return (
      <>
        <div>{totalArea}</div>
        <div>{totalPerimeter}</div>
      </>
  );
};

export default app;
