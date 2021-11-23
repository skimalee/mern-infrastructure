import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {getUser} from '../../utilities/users-service';
import './App.css';
import NewOrderPage from '../NewOrderPage';
import AuthPage from '../AuthPage';
import OrderHistoryPage from '../OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route />
          </Routes>
        </>
        : 
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
