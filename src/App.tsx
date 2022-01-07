import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <div className='body'>
        <Routes >
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
