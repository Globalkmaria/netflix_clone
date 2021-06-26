import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import requests from './api/request';
import Row from './components/Row';
function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 700);
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Trending Now" isLargeRow fetchURL={requests.fetchTrending} />
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" isLargeRow fetchURL={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        isLargeRow
        fetchURL={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        isLargeRow
        fetchURL={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        isLargeRow
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row
        title="Romance Movies"
        isLargeRow
        fetchURL={requests.fetchRomanceMovies}
      />
    </div>
  );
}

export default App;
