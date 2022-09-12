import React, { useEffect } from "react";

export const useCurrentWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {

    let timeOutId = null;

    const resizeListener = () => {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => setWidth(window.innerWidth), 200);
    }

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  })

  return width;
}