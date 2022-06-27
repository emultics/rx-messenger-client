import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/messenger/register" element={<Register />} />

          {/* <Route
            path="/"
            element={
              <ProtectRoute>
                {' '}
                <Messenger />{' '}
              </ProtectRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
