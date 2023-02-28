import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './components/body/Body';
function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Body />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
