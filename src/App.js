import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom';
import DashboardPage from './pages/DashboardPages';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import WatchListPage from './pages/WatchListPage';

function App() {
  return (
    <div>
            <Routes>
         <Route path='/' element={<Home />}  />
         <Route path="/dashboard" element={<DashboardPage />} />
         <Route path='/coin/:id' element={<CoinPage />} />
           <Route path="/compare" element={<ComparePage />} />
          <Route path='/watchlist' element={<WatchListPage />} />
            </Routes>
    </div>
  );
}

export default App;
