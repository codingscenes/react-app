export const randomColor = () => {
  const colors = [
    '#FFC312',
    '#C4E538',
    '#12CBC4',
    '#FDA7DF',
    '#ED4C67',
    '#F79F1F',
    '#A3CB38',
    '#1289A7',
    '#D980FA',
    '#B53471',
    '#EE5A24',
    '#009432',
    '#0652DD',
    '#9980FA',
    '#833471',
    '#EA2027',
    '#006266',
    '#1B1464',
    '#5758BB',
    '#6F1E51',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const randomShape = () => {
  const shapes = [
    <rect x='0' y='0' width='50' height='50' rx='10' />,
    <circle cx='50' cy='50' r='50' />,
    <polygon points='50 0 100 100 0 100' />,
    <path d='M50 0 L100 100 L0 100 Z' />,
  ];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

// to use
{
  /* <svg style={{ width: '35px' }} viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'>
  {randomShape()}
  <style>{`.shape { fill: ${randomColor()}; }`}</style>
</svg>; */
}
