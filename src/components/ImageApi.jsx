import React from "react";

function ImageApi({ path, alt, className }) {
  return (
    <img
      src={`https://www.themoviedb.org/t/p/w500/${path}`}
      alt={alt}
      className={className}
    />
  );
}

export default ImageApi;
