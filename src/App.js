import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
