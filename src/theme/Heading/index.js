import React from 'react';
import Heading from '@theme-original/Heading';

export default function HeadingWrapper(props) {
  return (
    <>
      <Heading 
        {...props} 
        style={{
          fontWeight: 800, 
          letterSpacing: '-0.02em', 
        }}
      />
    </>
  );
}
