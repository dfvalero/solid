import React from 'react';
import {AppProps} from "./App.type";

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
