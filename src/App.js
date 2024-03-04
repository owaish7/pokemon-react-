
import React, { useEffect, useState } from 'react';
import List from './List';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setNextPageURL(res.data.next);
      setPrevPageURL(res.data.previous);
      setPokemon(res.data.results.map((p) => p.name));
    });
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageURL);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageURL);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div style={styles.container}>
        <List pokemon={pokemon} />

        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={goToPrevPage}
            disabled={!prevPageURL}
          >
            Previous
          </button>
          <button
            style={styles.button}
            onClick={goToNextPage}
            disabled={!nextPageURL}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    outline: 'none',
  },
};

export default App;
