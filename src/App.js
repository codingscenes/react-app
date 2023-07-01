const imageGallery = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1540273777513-7c4973aa2cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1687274999959-dd29003bfa17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1687800132770-8f1600a5849e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1828&q=80',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1687709834461-85009675e422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1687684422740-d7dcffe238db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1687507593516-abd148e0bac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
];

function App() {
  return (
    <div className='App'>
      <h3>Photos from Nokia 1100</h3>
      {imageGallery.map((image) => (
        <img className='image' src={image.url} key={image.id} />
      ))}
    </div>
  );
}

export default App;
