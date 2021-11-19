import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import NewOrderPage from '../NewOrderPage';
import AuthPage from '../AuthPage';
import OrderHistoryPage from '../OrderHistoryPage';
import NavBar from '../../components/NavBar';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route />
          </Routes>
        </>
        : 
        <AuthPage />
      }
    </main>
  );
}
