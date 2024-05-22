import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import Game from './Components/game/Game';
import Header from './Components/Header/Head';
import { useTheme } from './Components/context/Context';
import Like from './Components/like/Like';
function App() {
  const {theme} = useTheme()

  

  return (
    <div className={`${theme} App` }>
      <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/like' element={<Like/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
