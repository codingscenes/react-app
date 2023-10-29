const LoadingBlock = () => {
  return (
    <div className='loading-block'>
      <svg className='loading-icon' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='50' cy='50' r='45' />
      </svg>
      <div className='loading-text'>Loading...</div>
    </div>
  );
};

export default LoadingBlock;
