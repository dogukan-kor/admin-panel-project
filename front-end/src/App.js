import './css/App.css';
import Admin from './pages/Admin'
import Anasayfa from './pages/Anasayfa'
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'>
      <Route index element={<Anasayfa />} />
      <Route path='admin' element={<Admin />} />
    </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
