import { Route, Routes } from 'react-router-dom';
import ArtistsList from './components/artists/ArtistsList';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import ShowsList from './components/shows/ShowsList';

function App() {
  return (
    <div>
      <Header />
      <div className='body'>
        <Routes >
          <Route path="/" element={<Dashboard/>} />
          <Route path="/artists" element={<ArtistsList/>} />
          <Route path="/shows" element={<ShowsList/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
