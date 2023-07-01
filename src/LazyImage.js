import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ url }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  let callback = (entries, observer) => {
    console.log(observer);
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback, { threshold: 0 });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      //   observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  return inView ? (
    <img src={url} className='image' />
  ) : (
    <img className='image-placeholder' ref={ref} />
  );
};

export default LazyImage;
