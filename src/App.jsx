import { useState } from 'react';
import useFetch from './Hooks/useFetch';
import './App.css';
import './CustomScrollbar.css';

function App() {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) return (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: "white",
    fontWeight: 'bold'
  }}>
    <p style={{fontSize: '20px', margin: '0 auto'}}>Loading...</p>
  </div>
);
  if (error) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'black',
      color: "white",
      fontWeight: 'bold'
    }}>
      <p>Error: {error}</p>
    </div>
);

  return (
    <div style={{ padding: '20px', backgroundColor: 'black', color: 'white', overflowX: 'hidden'}}>
      <h1 style={{ textAlign: 'center', padding: '10px' }}>Cloths Gallery</h1>
      {/* Apply the custom scrollbar class */}
      <div
        className="scrollbar" 
        id="style-15" 
        style={{
          maxHeight: '90vh', 
          overflowY: 'scroll', 
          padding: '10px',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {data.map((item) => (
            <div key={item.id} className="grid-item">
              <img
                src={item.images[0]}
                alt={item.title}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <p style={{ textAlign: 'center', marginTop: '8px' }}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
