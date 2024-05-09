import React from 'react';
import { Grid } from 'react-loader-spinner';
import { LoaderContainer } from './index';

const Loader = () => {
  return (
    <LoaderContainer>
      <Grid
        visible={true}
        height={80}
        width={80}
        color="#3ca5eb"
        aria-label="grid-loading"
        radius={12.5}
        wrapperStyle={{}}
        wrapperClassName="loader"
      />
    </LoaderContainer>
  );
};

export default Loader;
