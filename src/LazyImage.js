import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ id, url }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // observer.unobserve(ref.current)
      observer.disconnect();
    };
  }, []);

  return inView ? (
    <img className='image' src={url} />
  ) : (
    <div id={id} ref={ref} className='image-placeholder' />
  );
};

export default LazyImage;
