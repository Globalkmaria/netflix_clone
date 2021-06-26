import React from 'react';
import { LoadingConatiner, LoadingImg } from './LoadingElement';
function Loading() {
  return (
    <LoadingConatiner>
      <LoadingImg
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
    </LoadingConatiner>
  );
}

export default Loading;
