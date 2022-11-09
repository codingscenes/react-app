import React, { useMemo } from 'react';

const CustomList = (props) => {
  const { list } = props;

  const sortedList = useMemo(() => {
    console.log('Sorted List method called!');
    return list.sort((a, b) => a - b);
  }, [list]);//0x343, 0x343

  console.log('Custom List running!');
  return (
    <div className='list'>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(CustomList);
