import React from 'react';

const Image = ({ src, alt = '', width = 'auto', height = 'auto', style = {}, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ display: 'block', maxWidth: '100%', height: 'auto', ...style }}
      className={className}
    />
  );
};

export default Image;